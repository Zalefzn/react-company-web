import React, { Component } from "react";
import "./Form.css";
import swal from "sweetalert";
import {Link} from "react-router-dom";
import ApiDataGet from "../api/Api";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cek: true,
      judul: "Welcome Back",
      sub: "Sign in your account",
      value: "",
      tampungData: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e, event = this.state.value) => {
    e.preventDefault();
    if(event !== null){
      ApiDataGet.getDataUser().then(result => {
       this.setState = ({
        tampungData: result,
       });
      })
      swal({
        title: "Success",
        text: "Data Success",
        icon: "success",
      })
    }      
  }
  
  handleChange(event){
      this.setState({
        value: event.target.value,
      });
      console.info(event.target.value);
  }


  render() {
    const { password, username, buttonName, forgetPass, haveAccount } = this.props;
    return (
      <div className="login-content">
        <div className="text-welcome">
          <h2>{this.state.judul}</h2>
          <p className="p-vol1-form">{this.state.sub}</p>
        </div>
        <div className="login-items">
          <form>
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
        <div className="forget-pass">
          <p className="p-vol2-form">
            <Link className="link-forget"to="/ForgetPass">{forgetPass}</Link>
            </p>
        </div>
        <div className="have-account">
          <p className="p-vol3-form">
            {haveAccount} <Link className="link-regis" to="/RegisterPage">Register</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default FormLogin;
