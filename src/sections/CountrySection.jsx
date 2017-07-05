import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import CountryList from '../components/CountryList';

class CountrySection extends Component {
  state = {
    countries: [
      {
        id: 1,
        name: 'Brazil',
        iso2: 'BR',
        iso3: 'BRA',
      },
      {
        id: 2,
        name: 'Canada',
        iso2: 'CA',
        iso3: 'CAN',
      },
      {
        id: 3,
        name: 'United States of America',
        iso2: 'US',
        iso3: 'USA',
      },
    ],
  };

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
