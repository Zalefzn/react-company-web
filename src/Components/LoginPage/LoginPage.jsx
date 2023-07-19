import React, { Component, Fragment } from "react";
import "../style/LoginPage.css";
import FormLogin from "../Lib/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  
  handleEventTarget = (e) => {
    e.preventDefault();
  };

  render() {
    const { logo, bg, pict } = this.props;
    return (
      <Fragment>
        <div className="container-login-page">
          <div className="content-login">
            <div className="content-image">
              <img className="bg-vol1" src={logo} alt=""></img>
            </div>
            <div className="display-bg">
              <img className="bg" src={bg} alt=""></img>
            </div>
            <div className="image-content-vol2">
              <img className="image-vol2" src={pict} alt=""></img>
            </div>
            <div className="text-content">
              <p className="text-vol1-content1">
                Join with us in building your company<br></br>
                to be advanced and growing rapidly
              </p>
            </div>
          </div>
          <FormLogin
            username="Username"
            password="Password"
            buttonName="Login"
            forgetPass="forget password ?"
            haveAccount ="Don't have account ?"
          />
        </div>
      </Fragment>
    );
  }
}

export default LoginPage;
