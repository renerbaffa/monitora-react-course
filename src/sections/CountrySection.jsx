import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'flux/utils';
import Button from 'react-bootstrap/lib/Button';

import { fetchCountries } from '../actions/countryActions';

import withDialog from '../hocs/withDialog';

import CountryStore from '../stores/CountryStore';
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
    // countries: [],
  };

  componentDidMount() {
    // this.fetchCountries();
    fetchCountries();
  }

  fetchCountries = () => {
    CountrySource.fetchCountries().then(
      countries => this.setState({ countries }),
    )
    .catch(
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
    ).catch(
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
    const { country } = this.state;
    const { open, countries, onOpenDialog } = this.props;

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

function getStores() {
  return [
    CountryStore,
  ];
}

function getState() {
  const state = CountryStore.getState();
  return {
    countries: state.countries,
  };
}

const CountrySectionWithDialog = withDialog(CountrySection);

const CountryContainer = (props) => <CountrySectionWithDialog {...props} />;

export default Container.createFunctional(
  CountryContainer,
  getStores,
  getState
);
