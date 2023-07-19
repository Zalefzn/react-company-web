import React, { Component, Fragment } from "react";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import HomeScreens from "./Components/Lib/ScreenHome/ScreenHome";
import ForgetPass from "./Components/ForgetPass/ForgetPass";
import VerificationPage from "./Components/Verification/Verification";
import ScreenAbout from "./Components/Lib/ScreenAbout/ScreenAbout";
import ScreenServ from "./Components/Lib/ScreenServices/ScreenServ";
import HomeDash from "./Components/Lib/Dashboard/HomeDash";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  home="Home"
                  button1="Get Started"
                  image="gedung.png"
                  button2="Sign In"
                />  
              }
            ></Route>
            <Route
              path="/LoginPage"
              element={
                <LoginPage logo="logo.png" bg="bg_vol2.png" pict="pict.png" />
              }
            ></Route>
            <Route path="/RegisterPage" element={<RegisterPage 
            logo="logo.png" bg="bg_vol2.png" pict="pict.png"
            />}></Route>
            <Route path="/HomeScreen" element={<HomeScreens />}></Route>
            <Route path="/ForgetPass" element={
            <ForgetPass
            />}></Route>
            <Route path="/Verification" element={<VerificationPage />}></Route>
            <Route path="/About" element={ <ScreenAbout /> }></Route>
            <Route path="/Serv" element={<ScreenServ />}></Route>
            <Route path="/Dash" element={<HomeDash />}></Route>
          </Routes>
        </Fragment>
      </Router>
    );
  }
}
export default App;
