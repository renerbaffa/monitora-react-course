import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import CountryList from '../components/CountryList';
import CountryDialog from '../components/CountryDialog';

class CountrySection extends Component {
  state = {
    open: false,
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
      {
        id: 4,
        name: 'Argentina',
        iso2: 'AR',
        iso3: 'ARG',
      },
    ],
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <h1>Countries</h1>
        <CountryList countries={this.state.countries} />
        <div>
          <Button bsStyle="primary" onClick={this.toggleDialog}>
            + Add country
          </Button>
        </div>

        <CountryDialog
          open={this.state.open}
          toggleDialog={this.toggleDialog}
        />
      </div>
    );
  }
}

export default CountrySection;
