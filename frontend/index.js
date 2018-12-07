// import another component

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './northgrove-logo.png';
import './index.less';

const App = () => (
  <div className="wrapper">
  <header>

    <div className="header" >
    <img className="menuleft" src={logo} width="22" height="22"></img>
      <div className="menuright">Login</div>
    </div>
  </header>
  <main>
    <center>
    <img className="logo" src={logo} alt="React Logo" /><br></br>
    <h1 className="logo">www.northgrove.no</h1>
    </center>
  </main>
  </div>

);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement

if (module.hot) {
  module.hot.accept();
}