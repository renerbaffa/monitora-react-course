import React, { Component } from 'react';

import Modal, { Header, Title, Body } from 'react-bootstrap/lib/Modal';

import CountryForm from './CountryForm';

class CountryDialog extends Component {
  render() {
    return (
      <Modal show>
        <Header>
          <Title style={{ textAlign: 'center' }}>
            Add country
          </Title>
        </Header>

        <Body>
          <CountryForm />
        </Body>
      </Modal>
    );
  }
}

export default CountryDialog;
