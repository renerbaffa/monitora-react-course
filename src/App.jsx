import React, { Component } from 'react';

import CountrySection from './sections/CountrySection';
import CountryDialog from './components/CountryDialog';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    open: true,
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <CountrySection />
        <CountryDialog
          open={this.state.open}
          toggleDialog={this.toggleDialog}
        />
      </div>
    );
  }
}

export default App;
