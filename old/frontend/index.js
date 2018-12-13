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
      <i className="fa fa-sign-in fa-2x menuright" />
    </div>
  </header>
  <main>
    <div className="main">
      <center>
        <img className="logo" src={logo} /><br></br>
        <h1 >www.northgrove.no</h1>
      </center>
    </div>
  </main>
  <tull>
    <div className="tull">
       <div className="jau"> Contact: kjetil@northgrove.no</div>
    </div>
  </tull>


  </div>

);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement

if (module.hot) {
  module.hot.accept();
}