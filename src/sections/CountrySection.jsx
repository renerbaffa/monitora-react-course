import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/lib/Button';

import { connect } from 'react-redux';
import { fetchCountries, postCountry, putCountry } from '../actions/countryActions';

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
    selectedCountryId: undefined,
    countries: [],
  };

  componentDidMount() {
    this.props.onFetchCountries();
  }

  handleEditCountry = (countryId) => {
    this.props.onOpenDialog();
    this.setState({
      selectedCountryId: countryId,
    });
  }

  handleSaveCountry = (country) => {
    this.closeDialog();
    if (this.state.selectedCountryId) {
      this.props.onPutCountry(country);
    } else {
      this.props.onAddCountry(country);
    }
    // CountrySource.saveCountry(country).then(
    //   this.fetchCountries,
    // ).catch(
    //   this.props.showError,
    // );
  };

  handleDeleteCountry = (countryId) => {
    // const countries = this.state.countries.filter(element => element.id !== countryId);
    // this.setState({ countries });
  }

  closeDialog = () => {
    this.props.onCloseDialog();
    this.setState({ selectedCountryId: undefined });
  }

  render() {
    const { selectedCountryId } = this.state;
    const { countries, open, onOpenDialog } = this.props;

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
          country={countries.content[selectedCountryId]}
          onCloseDialog={this.closeDialog}
          onSaveCountry={this.handleSaveCountry}
          open={open}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ countries }) => {
  return {
    countries,
  };
};
const mapDispatchtoProps = {
  onAddCountry: postCountry,
  onPutCountry: putCountry,
  onFetchCountries: fetchCountries,
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(withDialog(CountrySection));
