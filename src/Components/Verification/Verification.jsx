import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../style/Verification.css';

class VerificationPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: 'image2.png',
    }
  }

  render() {  
    return (
      <div classNmae="Verification-container">
        <div className="verif-content">
            <img className="image-verif" src={this.state.image} alt="" />
        </div>
        <div className="verif-text">
          <p className="verif-vol1">
            Verifying<br></br>
            Email.
          </p>
          <p className="verif-vol2">
            Your Password has been changed<br></br>
            Please back to home
          </p>
           <Link to="/"><button className="btn-verif-vol1" type="button" name="button">Back</button></Link>
        </div>
      </div>
    );
  }
}
export default VerificationPage;
