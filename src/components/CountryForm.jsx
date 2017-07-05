import React, { Component } from 'react';

import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

class CountryForm extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="countryName">
          <Col sm={2}>
            <ControlLabel>Name</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              placeholder="Country name"
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="countryIso2">
          <Col sm={2}>
            <ControlLabel>ISO2</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              placeholder="Country iso2"
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="countryIso3">
          <Col sm={2}>
            <ControlLabel>ISO3</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              placeholder="Country iso3"
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default CountryForm;
