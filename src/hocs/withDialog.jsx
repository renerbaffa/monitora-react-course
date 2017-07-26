import React, { Component } from 'react';

const withDialog = WrappedComponent =>
  class Dialog extends Component {
    state = {
      open: false,
    }

    openDialog = () => this.setState({ open: true });

    closeDialog = () => this.setState({ open: false });

    render() {
      const { open } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          open={open}
          onOpenDialog={this.openDialog}
          onCloseDialog={this.closeDialog}
        />
      );
    }
  };

export default withDialog;
