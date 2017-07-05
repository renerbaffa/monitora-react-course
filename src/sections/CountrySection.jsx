import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import CountryList from '../components/CountryList';

class CountrySection extends Component {
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <CountryList />
        <div>
          <Button bsStyle="primary">+ Add country</Button>
        </div>
      </div>
    );
  }
}

export default CountrySection;
