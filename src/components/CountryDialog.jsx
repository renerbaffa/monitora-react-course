import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal, { Header, Title, Body } from 'react-bootstrap/lib/Modal';

import CountryForm from './CountryForm';

class CountryDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    toggleDialog: PropTypes.func,
  }

  static defaultProps = {
    open: false,
    toggleDialog: () => {},
  }

  render() {
    const { open, toggleDialog } = this.props;

    return (
      <Modal show={open} onHide={toggleDialog}>
        <Header>
          <Title style={{ textAlign: 'center' }}>
            Add country
          </Title>
        </Header>

        <Body>
          <CountryForm toggleDialog={toggleDialog} />
        </Body>
      </Modal>
    );
  }
}

export default CountryDialog;
