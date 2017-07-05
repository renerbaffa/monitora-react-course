import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/lib/Table';
import EditIcon from 'react-icons/lib/fa/edit';
import DeleteIcon from 'react-icons/lib/fa/trash';

const ICON_SIZE = 20;
const styles = {
  tableIcons: {
    cursor: 'pointer',
  },
};

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
        <tr key={country.id}>
          <td>{country.id}</td>
          <td>{country.name}</td>
          <td>{country.iso2}</td>
          <td>{country.iso3}</td>
          <td>
            <EditIcon size={ICON_SIZE} style={styles.tableIcons} />
            <DeleteIcon size={ICON_SIZE} style={{ ...styles.tableIcons, marginLeft: 8 }} />
          </td>
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
