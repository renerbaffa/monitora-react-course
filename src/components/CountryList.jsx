import React, { Component } from 'react';

import Table from 'react-bootstrap/lib/Table';

class CountryList extends Component {
  render() {
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
          <tr>
            <td>1</td>
            <td>Brazil</td>
            <td>BR</td>
            <td>BRA</td>
            <td />
          </tr>
          <tr>
            <td>2</td>
            <td>Canada</td>
            <td>CA</td>
            <td>CAN</td>
            <td />
          </tr>
          <tr>
            <td>3</td>
            <td>United States of America</td>
            <td>US</td>
            <td>USA</td>
            <td />
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default CountryList;
