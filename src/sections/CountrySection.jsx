import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import CountryList from '../components/CountryList';
import CountryDialog from '../components/CountryDialog';

class CountrySection extends Component {
  state = {
    country: undefined,
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

  handleEditCountry = countryId =>
    this.setState({
      country: this.state.countries.find(element => element.id === countryId),
      open: true,
    });

  handleSaveCountry = (country) => {
    const countries = this.state.countries.filter(element => element.id !== country.id);
    countries.push(country);
    this.setState({ countries, open: false, country: undefined });
  };

  handleDeleteCountry = (countryId) => {
    const countries = this.state.countries.filter(element => element.id !== countryId);
    this.setState({ countries });
  }

  toggleDialog = () => this.setState({ open: !this.state.open, country: undefined });

  render() {
    const { countries, country, open } = this.state;

    return (
      <div>
        <h1>Countries</h1>
        <CountryList
          countries={countries}
          onDeleteCountry={this.handleDeleteCountry}
          onEditCountry={this.handleEditCountry}
        />
        <div>
          <Button bsStyle="primary" onClick={this.toggleDialog}>
            + Add country
          </Button>
        </div>

        <CountryDialog
          country={country}
          onSaveCountry={this.handleSaveCountry}
          open={open}
          toggleDialog={this.toggleDialog}
        />
      </div>
    );
  }
}

export default CountrySection;
