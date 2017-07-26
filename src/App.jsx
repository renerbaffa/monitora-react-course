import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/lib/Button';
import Modal, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';

import withDialog from './hocs/withDialog';

import CountrySection from './sections/CountrySection';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    onCloseDialog: PropTypes.func,
    onOpenDialog: PropTypes.func,
    open: PropTypes.bool,
  }

  static defaultProps = {
    onCloseDialog: () => {},
    onOpenDialog: () => {},
    open: false,
  }

  state = {
    errorMessage: '',
  }

  showError = (errorMessage = '') => {
    this.props.onOpenDialog();
    this.setState({ errorMessage });
    setTimeout(this.props.onCloseDialog, 3000);
  }

  render() {
    const { errorMessage } = this.state;
    const { open, onCloseDialog } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <CountrySection showError={this.showError} />

        <Modal show={open} onHide={onCloseDialog}>
          <Header>
            <Title style={{ textAlign: 'center' }}>
              Error
            </Title>
          </Header>

          <Body>
            {errorMessage}
          </Body>

          <Footer>
            <Button bsStyle="primary" onClick={onCloseDialog}>OK</Button>
          </Footer>
        </Modal>
      </div>
    );
  }
}

export default withDialog(App);
