import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/style.css';
import axios from "axios";
import { MDBInput } from 'mdb-react-ui-kit';
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'
import swal from 'sweetalert';
import { DisabledByDefault, Password } from '@mui/icons-material';

class Register extends Component {
    constructor(props){
      super(props)
   
      this.state = {
        items:[],
        isLoaded: false,
      }
    }
   
  
    async componentDidMount(){
        let userId = this.props.match.params.id;
        console.log(userId)
  
    }
  
    async handleSubmit(event){
      event.preventDefault();
      let objdata = []

     
      let tmpdata = {}
      for(let data of event.target){

        if(data.name == "is_superuser" || data.name == "is_staff"){
            tmpdata[data.name] =  event.target[data.name].checked
        }
        else{
            tmpdata[data.name] = data.value
        }
        
      }
  
      console.log(tmpdata)
      
      const data = await axios.post('https://pg-backend-server.herokuapp.com/api/register/',
      {
        username:tmpdata.username,
        email: tmpdata.email,
        password: tmpdata.password,
        is_superuser: tmpdata.is_superuser,
        is_staff: tmpdata.is_staff
      }
      ) .then(function (response) {
        console.log(response)

        swal({
          title:"User Registered Successfully",
          buttons: {
                 cancel: true,
                 confirm: "Submit"
                   }
          }).then( val => {
                  if(val)  {
                    window.location.replace("https://tij6.herokuapp.com/");
                          }
          });
      })
      .catch(function (error) {
        alert(error);
        
      });
  
  
    }
    password_checker(){
      var password = document.getElementById("password").value;
      var cpassword = document.getElementById("cpassword").value;
      if(cpassword === ""){
        document.getElementById("msg").innerText = "";
      }
      else{
        if(password != cpassword){
          document.getElementById("msg").innerText = "Password Mismatch";
          document.getElementById("register").setAttribute("disabled","disabled")
        }
        else{
          document.getElementById("msg").innerText = "";
          document.getElementById("register").removeAttribute("disabled");
        }
      }
    }
    render() {
  return(
    <div>
    <img className="wave" src="assets/img/wave3.png" />
        <div className="container6">
          <div className="img">
            <img src="assets/img/bg6.svg" />

          </div>
          <div className="login-content">
          <Form onSubmit={this.handleSubmit}>
          <center><p style={{fontSize:30}}><b>Register Here</b></p></center>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                UserName
                </Form.Label>
                <Col sm={9}>
                <Form.Control   type="text" name="username" placeholder="Username"  required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                Email
                </Form.Label>
                <Col sm={9}>
                <Form.Control   type="email" name="email" placeholder="email"  required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                Password
                </Form.Label>
                <Col sm={9}>
                <Form.Control   type="password" name="password" placeholder="password" id="password" required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                Confirm Password
                </Form.Label>
                <Col sm={9}>
                <Form.Control   type="password" name="password" placeholder="Confirm password" id="cpassword" onInput={this.password_checker} required/>
                <center><p className="text-danger" id="msg"></p></center>
                </Col>
            </Form.Group>
           

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Super User" name="is_superuser" />
                <Form.Check type="checkbox" label="Staff" name="is_staff" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 3 }}>
                <Button variant="success" type="submit" value="Submit" id="register">Register</Button>&nbsp;&nbsp;
                <Button variant="danger" type="cancel" value="cancel" >Cancel</Button>
                </Col>
            </Form.Group>
        </Form>
          </div>
        </div>
    </div>
  )
}
}

export default Register

