import React from 'react';
import { Col, Form, Button} from "react-bootstrap";

class Home extends React.Component {
  state={
    Cname:'',
    Cemail:''
  }
  handleChange = (event) => {
    this.setState({
      Cname:event.target.value,
      
    });
  }
  hChange = (event1) => {
    this.setState({
      
      Cemail:event1.target.value
    });
  }
  mySubmit = (event) => {
    console.log(this.state.Cname)
    
    event.preventDefault();
    alert("You are submitting ");
  }
  mySubmit = (event1) => {
    console.log(this.state.Cemail)
    event1.preventDefault();
    alert("You are submitting ");
  }
  render(){
    return (
      <Form onSubmit={this.mySubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="Cname">
            <Form.Label> Company Name</Form.Label>
            <Form.Control type="Cname" placeholer="Enter your Company Name" onChange={this.handleChange}></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} controlId="companyemail">
          <Form.Label> Company Email Address </Form.Label>
          <Form.Control type="email" placeholer="Enter Company email address" onChange={this.hChange}></Form.Control>
        </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};


  
export default Home;