import React, { Component, Fragment } from "react";
import FormRegis from "../Lib/form/FormRegis";
import "./RegisterPage.css";

class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }


  render() {
    const { logo, bg, pict } = this.props;
    return (
      <Fragment>
        <div className="container-regis-page">
          <div className="content-regis">
            <div className="content-image-regis">
              <img className="bg-vol1-regis" src={logo} alt=""></img>
            </div>
            <div className="display-bg-regis">
              <img className="bg-regis" src={bg} alt=""></img>
            </div>
            <div className="image-content-vol2-regis">
              <img className="image-vol2-regis" src={pict} alt=""></img>
            </div>
            <div className="text-content-regis">
              <p className="text-vol1-content1-regis">
                Join with us in building your company<br></br>
                to be advanced and growing rapidly
              </p>
            </div>
          </div>
          <FormRegis
            username="Username"
            password="Password"
            email="Email"
            buttonName="Register"
            haveAccount="Do you have account ?"
          />
        </div>
      </Fragment>
    );
  }
}

export default RegisterPage;
