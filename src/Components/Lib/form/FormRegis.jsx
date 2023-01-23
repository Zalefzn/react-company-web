import React, { Component } from "react";
import "./FormRegis.css";
import swal from "sweetalert";
import {Link} from "react-router-dom";

class FormRegis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cek: true,
      judul: "Welcome Back",
      sub: "Sign Up your account",
      value: "",
      date: Date.now(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.date === null){
      swal({
        title: "Warning!",
        text: "Register failed!",
        icon: "warning",
      });
      
    } else {
      if(this.state.date !== null){
        swal({
          title: "Success!",
          text: "Register Success!",
          icon: "success",
        });
      }
    }
    
  }

  handleChange(event){
      this.setState({
        value: event.target.value,
      });
      console.info(event.target.value);
  }

  render() {
    const { password, username, buttonName, haveAccount, email } = this.props;
    return (
      <div className="login-content">
        <div className="text-welcome">
          <h2>{this.state.judul}</h2>
          <p className="p-vol1-form">{this.state.sub}</p>
        </div>
        <div className="login-items-regis">
          <form>
            <label>{email}</label>
            <br></br>
            <br></br>
            <input placeholder="your email..."type="text" onChange={this.handleChange}></input>
            <br></br>
            <br></br>
            <label>{username}</label>
            <br></br>
            <br></br>
            <input placeholder="your username..."type="text" onChange={this.handleChange}></input>
            <br></br>
            <br></br>
            <label>{password}</label>
            <br></br>
            <br></br>
            <input placeholder="your password..."type="password"></input>
            <br></br>
            <br></br>
            <button className="btn-vol1-form"type="button" name="button" onClick={this.handleSubmit}>
             <Link className="link-home" to ="/HomeScreen">{buttonName}</Link>
            </button>
          </form>
        </div>
        <div className="have-account">
          <p className="p-vol3-form-regis">
            {haveAccount} <Link className="link-regis" to="/LoginPage">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default FormRegis;
