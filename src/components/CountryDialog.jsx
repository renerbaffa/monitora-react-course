import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal, { Header, Title, Body } from 'react-bootstrap/lib/Modal';

import CountryForm from './CountryForm';

class CountryDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onSaveCountry: PropTypes.func,
    toggleDialog: PropTypes.func,
  }

  static defaultProps = {
    open: false,
    onSaveCountry: () => {},
    toggleDialog: () => {},
  }

  render() {
    const { open, onSaveCountry, toggleDialog } = this.props;

    return (
      <Modal show={open} onHide={toggleDialog}>
        <Header>
          <Title style={{ textAlign: 'center' }}>
            Add country
          </Title>
        </Header>

        <Body>
          <CountryForm
            onSaveCountry={onSaveCountry}
            toggleDialog={toggleDialog}
          />
        </Body>
      </Modal>
    );
  }
}

export default CountryDialog;
