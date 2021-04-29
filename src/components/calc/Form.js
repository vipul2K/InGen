import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classes from '../grid/classes.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
function App() {
  const [inputList, setInputList] = useState([{ ProductName: "", Quantity: "",Price:""}]);
  var Total=0;
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);   
  };
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleAddClick = () => {
    const list = [...inputList];
    console.log(list)
    setInputList([...inputList, { ProductName: "", Quantity: "",Price:"" }]);
  };
 const _exportPdf = () => {
     html2canvas(document.querySelector("#print")).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf"); 
    });

 }

  return (
    <div className="App"  id='print'>
      {inputList.map((x, i) => {
        return (
            <div className={classes.root}>
              <Grid container spacing={12}>
                  <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <div className="box">
                          <input
                            name="ProductName"
                placeholder="Enter Product Name"
                            value={x.ProductName}
                            onChange={e => handleInputChange(e, i)}
                          />                        
                          <input
                            className="ml10"
                            name="Quantity"
                placeholder="Enter Quantity"
                            value={x.Quantity}
                            onChange={e => handleInputChange(e, i)}
                          />
                          <input
                            name="Price"
                placeholder="Price"
                            value={x.Price}
                            onChange={e => handleInputChange(e, i)}
                          />
                    </div>
                  </Paper>
                </Grid>  
                <Grid item xs={1}>
                    <Paper className={classes.paper}>
                      <div className="btn-box">
                        {inputList.length !== 1 && <button
                          className="mr10"
                          onClick={() => handleRemoveClick(i)}>Remove</button>}
                        {inputList.length - 1 === i && <button onClick={handleAddClick}>+</button>}
                        </div>
                    </Paper>
                  </Grid>
                    <Grid item xs={5}>
                      <Paper className={classes.paper}>
                            {x.ProductName} : {x.Quantity*x.Price}                                 
                      </Paper>
                    </Grid> 
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>
                        Total: {Total=(x.Quantity*x.Price)+Total}      

                      </Paper>
                    </Grid> 
                    
            </Grid>  
            </div>
          );
        })}  
        <button onClick={_exportPdf}> Print</button>
    
      </div>

  );
}
export default App;