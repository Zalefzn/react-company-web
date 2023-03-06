import React, { Component, Fragment } from "react";
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
import './ScreenHome.css';
import ApiDataGet from "../../api/Api";
import ScreenAbout from "../ScreenAbout/ScreenAbout";
import ScreenServ from "../ScreenServices/ScreenServ";

class HomeScreens extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount(){
    try{
      ApiDataGet.getData().then((res) => {
        this.setState({
          data: res,
        });
        console.log(res);
      })
    }catch(err){
      console.info(err.message);
    }
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
              <li className="i">About</li>
              <li className="i">Services</li>
              <li className="i">Contact</li>
              <li className="i"><button 
              className="i-btn" 
              type="button" 
              name="button"
              onClick={this.logoutUser}
              ><Link 
              className="link-route"
              to="/LoginPage">
                Logout</Link></button></li>
            </ul>
          </div>

          {/*Header Container Content*/}
          <div className="container-content-home">
            <div className="content-home">
              <img className="image-content-home" src="image3.png" alt=""></img>
              <div className="desc-content-home">
                <p className="desc-content-vol1">
                  We Provide Website Development Services<br></br>
                  and Mobile Applications with International<br></br>
                  Standard Language Programs
                </p>
                <p className="desc-content-vol2">
                  Techkuy is Your Best Solution in doing Business
                </p>
                <button type="Button" name="button" className="button-content-home">
                 Employee
                </button>
              </div>
            </div>
          </div>
        </div>
        <ScreenAbout />
        <ScreenServ />
      </Fragment>
    );
  }
}
export default HomeScreens;
