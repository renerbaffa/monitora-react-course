import React, { Component } from 'react';

import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

class CountryForm extends Component {
  state = {
    name: '',
    iso2: '',
    iso3: '',
  };

  handleChange = event =>
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });

  render() {
    const { name, iso2, iso3 } = this.state;

    return (
      <Form horizontal>
        <FormGroup controlId="name">
          <Col sm={2}>
            <ControlLabel>Name</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              onChange={this.handleChange}
              placeholder="Country name"
              type="text"
              value={name}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="iso2">
          <Col sm={2}>
            <ControlLabel>ISO2</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              onChange={this.handleChange}
              placeholder="Country iso2"
              type="text"
              value={iso2}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="iso3">
          <Col sm={2}>
            <ControlLabel>ISO3</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl
              onChange={this.handleChange}
              placeholder="Country iso3"
              type="text"
              value={iso3}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default CountryForm;
