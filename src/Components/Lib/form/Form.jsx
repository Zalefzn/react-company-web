import React, { Component } from "react";
import "./Form.css";
import swal from "sweetalert";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cek: true,
      judul: "Welcome Back",
      sub: "Sign in your account",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    swal({
      title: "Success!",
      text: "Login Success!",
      icon: "success",
    });
  }

  handleUsername() {}

  render() {
    const { password, username, buttonName } = this.props;
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
            <input type="text"></input>
            <br></br>
            <br></br>
            <label>{password}</label>
            <br></br>
            <br></br>
            <input type="password"></input>
            <br></br>
            <br></br>
            <button className="btn-vol1-form"type="button" name="button" onClick={this.handleSubmit}>
              {buttonName}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormLogin;
