import React, { useState } from "react";
import "./Form.css";
import swal from "sweetalert";
import {Link, useNavigate} from "react-router-dom";


function FormLogin(){

  const [username, setUsername] = useState('');
  const [password , setPassword] = useState('');

  const navigate = useNavigate();

  async function loginUser(){
    console.info('data', username, password);
    let item={username, password}
    let result = await fetch("http://localhost:3004/login", {
      method: "POST",
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(item),
    });
    result= await result.json();
    localStorage.setItem("user-info",  JSON.stringify(result))
        swal({
          title: '!Success',
          text: 'Register Success',
          icon: "success"
        });
        navigate("/HomeScreen");
   
  }


  return (
      <div className="login-content">
        <div className="text-welcome">
          <h2>Welcome Back</h2>
          <p className="p-vol1-form">Sign in your account</p>
        </div>
        <div className="login-items">
          <form>
            <label>Username</label>
            <br></br>
            <br></br>
            <input  value={username} placeholder="your username..."type="text" onChange={(data) => {
              setUsername(data.target.value);
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
