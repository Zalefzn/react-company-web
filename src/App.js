import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import ForgetPass from "./Components/ForgetPass/ForgetPass";
import AdminPanel from "./Admin/AdminPanel";

class App extends Component {
  render() {
    return (
        <Fragment>
          <Routes> 
            <Route
              path="/"
              element={
                <LoginPage logo="logo.png" bg="bg_vol2.png" pict="pict.png" />
              }
            ></Route>
            <Route path="/RegisterPage" element={<RegisterPage 
            logo="logo.png" bg="bg_vol2.png" pict="pict.png"
            />}></Route>
            <Route path="/ForgetPass" element={
            <ForgetPass
            />}></Route>
            <Route path="/AdminPanel" element={<AdminPanel />}></Route>
          </Routes>
        </Fragment>
    );
  }
}
export default App;
