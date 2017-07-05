import React, { Component } from 'react';

import CountrySection from './sections/CountrySection';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <CountrySection />
      </div>
    );
  }
}

export default App;
