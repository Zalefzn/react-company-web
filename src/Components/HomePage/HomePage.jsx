import React, { Component } from "react";
import "./HomePage.css";
import swal from "sweetalert";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      bg: "bg_Vol1.png",
      p2: "Techkuy is Your Best Solution in doing Business",
    };
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(e) {
    e.preventDefault();
    swal({
      title: "Warning!",
      text: "Please Sign in First!",
      icon: "warning",
    });
  }

  render() {
    const { home, button1, image, button2 } = this.props;
    const { p2 } = this.state;

    return (
      <div className="home-container">
        <div className="image-content">
          <img src={this.state.bg} alt=""></img>
        </div>
        {/*Navbar*/}
        <div className="navbar">
          <div className="logo">
            <img src="logo.png" alt=""></img>
          </div>
          <ul>
            <li className="li-vol1">{home}</li>
            <li className="li-vol2">
              <button
                className="btn-vol1"
                type="button"
                name="button"
                onClick={this.handleAlert}
              >
                {button1}
              </button>
            </li>
          </ul>
        </div>

        {/*Content*/}
        <div className="content-container">
          <div className="text-vol1">
            <p className="p-vol1">
              We Provide Website Development Sevices<br></br>and Mobile
              Applications with International<br></br>Standard Language Programs
            </p>
          </div>
          <div className="text-vol2">
            <p className="p-vol2">{p2}</p>
          </div>
          <div className="button-vol1">
            <button className="btn-vol2" type="button" name="button">
              {button2}
            </button>
          </div>
          <div className="container-image">
            <img className="img-vol1" src={image} alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
