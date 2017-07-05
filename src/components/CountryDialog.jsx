import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

class CountryDialog extends Component {
  render() {
    return (
      <Modal show>
        <Modal.Header>
          <Modal.Title style={{ textAlign: 'center' }}>
            Add country
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Body
        </Modal.Body>

        <Modal.Footer>
          <Button>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

export default CountryDialog;
