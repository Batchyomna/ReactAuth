import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import axios  from 'axios' 


class SignUp extends Component {
  constructor(){
    super();
    this.state= {
      name:'',
      email:'',
      password:'',
      picture_profil: '',
      message: '',
    }
  }
  render() {
    return (
      <div> <span className="ingredient">{this.state.message}<br/></span>
      <div className="container">
        
        <Form>
          <Row>
            <Col sm={6}>
            <Form.Label className="float-left">Name</Form.Label>
              <Form.Control value={this.state.name} onChange={this.setChange.bind(this)} name="name" placeholder="Enter your name" />
            </Col>
            <Col sm={6}>
            <Form.Label className="float-left">Email address</Form.Label>
              <Form.Control  value={this.state.email} onChange={this.setChange.bind(this)} name="email" placeholder="Enter  email" />
            </Col>
            </Row>
           
            <Row>
            <Col sm={6}>
            <Form.Label className="float-left">Password</Form.Label>
              <Form.Control value={this.state.password} onChange={this.setChange.bind(this)} name="password"placeholder="Paswword" />
            </Col>
            <Col sm={6}>
            <Form.Label className="float-left">Confirm Password</Form.Label>
              <Form.Control placeholder="Password" />
            </Col>
          </Row>
          <Row>
         
         <Col sm={12}>
         <Form.Label className="float-left">Profile Picture</Form.Label>
           <Form.Control value={this.state.picture_profil} onChange={this.setChange.bind(this)} name="picture_profil" placeholder="Enter your profile picture link's" />
         </Col>
         </Row>
       
          <Button className ="Button" variant="primary" type="submit"onClick={this.tryToSignUp.bind(this)}>SignUp</Button>
        </Form>
      </div>
      </div>
    );
  }
  setChange(event){
    let myinput = event.target
    let inputname = myinput.name
    let value = myinput.value
    this.setState({
        [inputname]: value 
     });
  }

  async tryToSignUp(e) {
    e.preventDefault();
    console.log('my data' , this.state.name + this.state.email + this.state.password + this.state.picture_profil)
      try {
        let result = await axios.post(`http://localhost:8000/users/sign-up`, {name:this.state.name, email:this.state.email, password:this.state.password,picture_profil:this.state.picture_profil})
      console.log(result);
          if(result.status === 200){
        this.setState({
          name: '',
          email:'',
          password:'',
          picture_profil: '',
          message: 'You have been registered',
        }) 
      }
      } catch (error) {
        this.setState({
          name:'',
          email:'',
          password:'',
          picture_profil:'',
          message: 'Something wrong',

        })
          console.log(error);
      }
  }
}

export default SignUp;
