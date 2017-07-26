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

  showError = (errorMessage = '') => {
    this.setState({ open: true, errorMessage });
    setTimeout(this.hideError, 3000);
  }

  hideError = () => this.setState({ open: false, errorMessage: '' });

  render() {
    const { open, errorMessage } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <CountrySection showError={this.showError} />

        <Modal show={open} onHide={this.hideError}>
          <Header>
            <Title style={{ textAlign: 'center' }}>
              Error
            </Title>
          </Header>

          <Body>
            {errorMessage}
          </Body>

          <Footer>
            <Button bsStyle="primary" onClick={this.hideError}>OK</Button>
          </Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
