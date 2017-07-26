import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/lib/Button';

import withDialog from '../hocs/withDialog';

import CountrySource from '../sources/CountrySource';

import CountryList from '../components/CountryList';
import CountryDialog from '../components/CountryDialog';

class CountrySection extends Component {
  static propTypes = {
    onCloseDialog: PropTypes.func,
    onOpenDialog: PropTypes.func,
    open: PropTypes.bool,
    showError: PropTypes.func,
  }

  static defaultProps = {
    onCloseDialog: () => {},
    onOpenDialog: () => {},
    open: false,
    showError: () => {},
  }

  state = {
    country: undefined,
    countries: [],
  };

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries = () => {
    CountrySource.fetchCountries().then(
      countries => this.setState({ countries }),
      this.props.showError,
    );
  }

  handleEditCountry = (countryId) => {
    this.props.onOpenDialog();
    this.setState({
      country: this.state.countries.find(element => element.id === countryId),
    });
  }

  handleSaveCountry = (country) => {
    this.closeDialog();
    CountrySource.saveCountry(country).then(
      this.fetchCountries,
      this.props.showError,
    );
  };

  handleDeleteCountry = (countryId) => {
    const countries = this.state.countries.filter(element => element.id !== countryId);
    this.setState({ countries });
  }

  closeDialog = () => {
    this.props.onCloseDialog();
    this.setState({ country: undefined });
  }

  render() {
    const { countries, country } = this.state;
    const { open, onOpenDialog } = this.props;

    return (
      <div>
        <h1>Countries</h1>
        <CountryList
          countries={countries}
          onDeleteCountry={this.handleDeleteCountry}
          onEditCountry={this.handleEditCountry}
        />
        <div>
          <Button bsStyle="primary" onClick={onOpenDialog}>
            + Add country
          </Button>
        </div>

        <CountryDialog
          country={country}
          onSaveCountry={this.handleSaveCountry}
          open={open}
          onCloseDialog={this.closeDialog}
        />
      </div>
    );
  }
}

export default withDialog(CountrySection);
