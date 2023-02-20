import React, { Component, Fragment } from "react";
import swal from 'sweetalert';
import {Link} from 'axios';
import './ScreenHome.css';

class HomeScreens extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e){
    e.preventDefault(); 
    swal({
      title: '!Success',
      text: 'Logout Success!',
      icon: 'success',
    })
  }

    
  render() {
    return (
      <Fragment>
        <div className="home-screen-container">

          {/*Header Navbar Content*/}
          <div className="header-content"> 
            <div className="image-header-logo">
              <img className="image-src" src="logo.png" alt="" />
            </div>
            <ul>
              <li className="i">Home</li>
              <li className="i">Services</li>
              <li className="i">About</li>
              <li className="i">Contact</li>
              <li className="i"><button 
              className="i-btn" 
              type="button" 
              name="button"
              onClick={this.logoutUser}
              >Logout</button></li>
            </ul>
          </div>

          {/*Header Container Content*/}
          <div className="container-content-home">
            <div className="content-home">
              
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default HomeScreens;
