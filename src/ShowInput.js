import React, { Component } from 'react';
import ShowName from './ShowName';

class ShowInput extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.myName}
          onChange={this.props.handleChange}
        />
        <ShowName myName={this.props.myName} />
      </div>
    );
  }
}

export default ShowInput;
