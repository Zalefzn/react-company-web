import React, {useState}from 'react';
import {Link, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import './FormRegis.css';

 function FormRegis(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(){
   let dataUser = {
    email,
    username,
    password
   }
   console.info(dataUser);
      let postData = await fetch('http://localhost:3004/register',{
          method: 'POST',
          body: JSON.stringify(dataUser),
          headers: {
            'Content-type':'application/json',
          }
      });
      postData = await postData.json();
      localStorage.setItem("user-info",  JSON.stringify(dataUser));
      console.info('post data:', postData); 
      swal({
        title: '!Success',
        text: 'Register Success',
        icon: "success"
      });
      navigate('/LoginPage');
  }


  return (
    <div className="login-content">
      <div className="text-welcome">
        <h2>Welcome Back</h2>
        <p className="p-vol1-form">Please register here...</p>
      </div>
      <div className="login-items-regis">
        <form>
          <label>Email</label>
          <br></br>
          <br></br>
          <input value={email} placeholder="your email..." type="text" onChange={(data) => {
            setEmail(data.target.value)
          }}></input>
          <br></br>
          <br></br>
          <label>Username</label>
          <br></br>
          <br></br>
          <input value={username} placeholder="your username..." type="text" onChange={(data) => {
            setUsername(data.target.value)
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
          <button
            className="btn-vol1-form"
            type="button"
            name="button"
            onClick={handleSubmit}
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