import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classes from '../components/grid/classes.js';
import Form from '../components/calc/Form.js';

class MakeInvo extends Component{
  constructor() {
      super();
      var today = new Date(),
      date = today.getDate() + '-'+(today.getMonth() + 1) + '-' +today.getFullYear();
      this.state={
        currentDate:date,
      }
    }
  render(){
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Create Invoice</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            Date: { this.state.currentDate }
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Enter Details
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              INVOICE
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Form/>  
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default MakeInvo;
