import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal, { Header, Title, Body } from 'react-bootstrap/lib/Modal';

import CountryForm from './CountryForm';

class CountryDialog extends Component {
  static propTypes = {
    country: PropTypes.shape({}),
    open: PropTypes.bool,
    onSaveCountry: PropTypes.func,
    toggleDialog: PropTypes.func,
  }

  static defaultProps = {
    country: undefined,
    open: false,
    onSaveCountry: () => {},
    toggleDialog: () => {},
  }

  render() {
    const { country, open, onSaveCountry, toggleDialog } = this.props;

    return (
      <Modal show={open} onHide={toggleDialog}>
        <Header>
          <Title style={{ textAlign: 'center' }}>
            Add country
          </Title>
        </Header>

        <Body>
          <CountryForm
            country={country}
            onSaveCountry={onSaveCountry}
            toggleDialog={toggleDialog}
          />
        </Body>
      </Modal>
    );
  }
}

export default CountryDialog;
