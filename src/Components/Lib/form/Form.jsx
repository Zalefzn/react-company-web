import React, { Component } from "react";
import "./Form.css";
import swal from "sweetalert";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cek: true,
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
        <div className="login-items">
          <form>
            <label>{username}</label>
            <br></br>
            <input type="text" value="Rizalfzn16"></input>
            <br></br>
            <label>{password}</label>
            <br></br>
            <input type="password" value="*****"></input>
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
