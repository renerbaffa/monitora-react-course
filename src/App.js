import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ShowName from './ShowName';
import ShowInput from './ShowInput';

class App extends Component {
  state = {
    name: 'Rener',
  };

  handleChange = event => this.setState({ name: event.target.value });

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ShowInput myName={this.state.name} />
        <ShowName
          myName={this.state.name}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
