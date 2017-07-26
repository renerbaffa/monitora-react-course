import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal, { Header, Title, Body } from 'react-bootstrap/lib/Modal';

import CountryForm from './CountryForm';

class CountryDialog extends Component {
  static propTypes = {
    country: PropTypes.shape({}),
    open: PropTypes.bool,
    onSaveCountry: PropTypes.func,
    onCloseDialog: PropTypes.func,
  }

  static defaultProps = {
    country: undefined,
    open: false,
    onSaveCountry: () => {},
    onCloseDialog: () => {},
  }

  render() {
    const { country, open, onSaveCountry, onCloseDialog } = this.props;

    return (
      <Modal show={open} onHide={onCloseDialog}>
        <Header>
          <Title style={{ textAlign: 'center' }}>
            Add country
          </Title>
        </Header>

        <Body>
          <CountryForm
            country={country}
            onSaveCountry={onSaveCountry}
            onCloseDialog={onCloseDialog}
          />
        </Body>
      </Modal>
    );
  }
}

export default CountryDialog;
