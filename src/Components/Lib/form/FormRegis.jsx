import React, {useState}from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import './FormRegis.css';

 function FormRegis(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [password, setPassword] = useState('');

  const handleRegis = async(e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/dataUsers', {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword
        });
        swal({
          title: "!Success",
          text: "Success Register",
          icon: "success",
        })
        navigate("/LoginPage");
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
        <p className="p-vol1-form">Please register here...</p>
      </div>
      <div className="login-items-regis">
        <form onSubmit={handleRegis}>
          <label>Username</label>
          <br></br>
          <br></br>
          <input value={name} placeholder="your username..." type="text" onChange={(data) => {
            setName(data.target.value)
          }}></input>
          <br></br>
          <br></br>
          <label>Email</label>
          <br></br>
          <br></br>
          <input value={email} placeholder="your email..." type="text" onChange={(data) => {
            setEmail(data.target.value)
          }}></input>
          <br></br>
          <br></br>
          <label>Password</label>
          <br></br>
          <br></br>
          <input value={password} placeholder="your password..." type="password" onChange={(data) => {
            setPassword(data.target.value)
          }}></input>
          <br></br>
          <br></br>
          <label>Confirm Password</label>
          <br></br>
          <br></br>
          <input value={confPassword} placeholder="Confirm password..." type="password" onChange={(data) => {
            setConfPassword(data.target.value)
          }}></input>
          <br></br>
          <br></br>
          <button
            className="btn-vol1-form"
            type="submit"
            name="button"
          >
           Register
          </button>
        </form>
      </div>
      <div className="have-account">
        <p className="p-vol3-form-regis">
          Do you have account ?{" "}
          <Link className="link-regis" to="/LoginPage">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default FormRegis;