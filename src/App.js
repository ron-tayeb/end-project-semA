import './App.css';
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import React, { Component } from 'react'
import Main from './Components/Main';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"> 
          <Main/>
        </div>
      </div>
    )
  }
}
export default withRouter(App);