import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  rightButton: {
    marginLeft: 8,
  },
};

class CountryForm extends Component {
  static propTypes = {
    toggleDialog: PropTypes.func,
  }

  static defaultProps = {
    toggleDialog: () => {},
  }

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
    const { toggleDialog } = this.props;

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

        <div style={styles.buttonContainer}>
          <Button onClick={toggleDialog}>
            Close
          </Button>
          <Button bsStyle="primary" style={styles.rightButton}>
            Save changes
          </Button>
        </div>
      </Form>
    );
  }
}

export default CountryForm;
