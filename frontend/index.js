// import another component

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './northgrove-logo.png';
import './index.css';

const App = () => (
  <div className="App">
    <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">www.northgrove.no</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement

if (module.hot) {
  module.hot.accept();
}