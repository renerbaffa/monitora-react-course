import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Modal, { Header, Title, Footer, Body } from 'react-bootstrap/lib/Modal';

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
          Body
        </Body>

        <Footer>
          <Button>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Footer>

      </Modal>
    );
  }
}

export default CountryDialog;
