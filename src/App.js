import React, {Component, Fragment} from 'react';
import HomePage from './Components/HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<HomePage 
            home="Home"
            button1="Get Started"
            image="gedung.png"
            button2="Sign In"
            />}></Route>
          </Routes>
        </Fragment>
      </Router>
    );
  }
}
export default App;