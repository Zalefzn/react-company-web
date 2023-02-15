import React, { Component, Fragment } from "react";

class HomeScreens extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-screen-container">
          <div className="header-content">
            <div className="image-header-logo">
              <img src="logo.png" alt="" />
            </div>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default HomeScreens;
