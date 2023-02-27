import React, { useState } from "react";
import "./Form.css";
import swal from "sweetalert";
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";


function FormLogin(){

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  async function loginUser(){
    try {
      await axios.post('http://localhost:3001/login', {
          email: email,
          password: password
      });
      swal({
        title: "!Success",
        text: "Success Login",
        icon: "success",
      })
      navigate("/HomeScreen");
  } catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg);
      }
  }
  }


  return (
      <div className="login-content">
        <div className="text-welcome">
          <h2>Welcome Back</h2>
          <p className="p-vol1-form">Sign in your account</p>
        </div>
        <div className="login-items">
          <form>
            <label>Email</label>
            <br></br>
            <br></br>
            <input  value={email} placeholder="your username..."type="text" onChange={(data) => {
              setEmail(data.target.value);
            }}></input>
            <br></br>
            <br></br>
            <label>Password</label>
            <br></br>
            <br></br>
            <input value={password} placeholder="your password..."type="password" onChange={(data) => {
              setPassword(data.target.value);
            }}></input>
            <br></br>
            <br></br>
            <button 
            className="btn-vol1-form"
            type="button" 
            name="button" 
            onClick={loginUser}
            >
              Login
            </button>
          </form>
        </div>
        <div className="forget-pass">
          <p className="p-vol2-form">
            <Link className="link-forget"to="/ForgetPass">Forget password?</Link>
            </p>
        </div>
        <div className="have-account">
          <p className="p-vol3-form">
            Don't have account ? <Link className="link-regis" to="/RegisterPage">Register</Link>
          </p>
        </div>
      </div>
    );
}

export default FormLogin;
