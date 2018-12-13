import React, { Component } from 'react';
import logo from './img/northgrove-logo-tr.png';
import './App.css';

export class Logopage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <h1 className="App-title">www.northgrove.no</h1>
        </header>
      </div>
    );
  }
}

//export default logopage;
