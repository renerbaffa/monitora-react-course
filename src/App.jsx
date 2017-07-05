import React, { Component } from 'react';

import CountrySection from './sections/CountrySection';
import CountryDialog from './components/CountryDialog';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleChange = event => this.setState({ name: event.target.value });

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <CountrySection />
        <CountryDialog />
      </div>
    );
  }
}

export default App;
