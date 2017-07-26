import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Modal, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';

import CountrySection from './sections/CountrySection';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    open: false,
    errorMessage: '',
  }

  toggleDialog = (errorMessage = '') => this.setState({ open: !this.state.open, errorMessage });

  render() {
    const { open, errorMessage } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <CountrySection showError={this.toggleDialog} />

        <Modal show={open} onHide={this.toggleDialog}>
          <Header>
            <Title style={{ textAlign: 'center' }}>
              Error
            </Title>
          </Header>

          <Body>
            {errorMessage}
          </Body>

          <Footer>
            <Button bsStyle="primary" onClick={() => this.toggleDialog()}>OK</Button>
          </Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
