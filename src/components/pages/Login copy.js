import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import axios from "axios";
import { MDBInput } from 'mdb-react-ui-kit';

async function loginUser() {
  
  const result = await axios({
    method: 'post',
    url: 'https://pg-backend-server.herokuapp.com/api/login/',
    data: {
      username: 'admin',
      password: 'admin'
    }
  });

  localStorage.setItem("access", result.data.access)
  window.location.replace("http://localhost:3000/home");



}
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div>
    <img className="wave" src="assets/img/wave3.png" />
        <div className="container6">
          <div className="img">
            <img src="assets/img/bg6.svg" />

          </div>
          <div className="login-content">
          <form onSubmit={handleSubmit}>
          <h2 className="title">Welcome</h2>
          <h3><b>Peace Growba</b></h3>
          <div className="input-div one">
           		   <div className="i">
           		   		<i className="fa fa-user"></i>
           		   </div>
           		   <div className="div">
                      <MDBInput label='User' id='typeText' type='text' onChange={e => setUserName(e.target.value)} />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
                     <MDBInput label='Password' id='typePassword' type='password' onChange={e => setPassword(e.target.value)} />
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn6" value="Login"/>
      </form>
          </div>
        </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};