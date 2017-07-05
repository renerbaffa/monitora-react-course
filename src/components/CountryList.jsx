import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/lib/Table';

class CountryList extends Component {
  static propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    countries: [],
  };

  render() {
    const { countries } = this.props;

    const countriesToShow = countries.map(
      country => (
        <tr>
          <td>{country.id}</td>
          <td>{country.name}</td>
          <td>{country.iso2}</td>
          <td>{country.iso3}</td>
          <td />
        </tr>
      ),
    );

    return (
      <Table
        bordered
        condensed
        hover
        striped
        style={{ margin: '32px auto', maxWidth: 700 }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>ISO2</th>
            <th>ISO3</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {countriesToShow}
        </tbody>
      </Table>
    );
  }
}

export default CountryList;
