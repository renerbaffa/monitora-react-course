import React, { Component } from 'react';
import ShowInput from './ShowInput';

class ShowName extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.myName}
          onChange={this.props.handleChange}
        />
        <ShowInput myName={this.props.myName} />
      </div>
    );
  }
}

export function myFunc() {

}

export default ShowName;
