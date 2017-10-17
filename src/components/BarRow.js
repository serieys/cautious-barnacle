import React, { Component } from 'react';

/**
 * BarRow component.
 */
export default class BarRow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
        return(
            <div>
                <span>{this.props.venue.name}</span>
                <span>{this.props.venue.location.address}</span>
                <span>{this.props.venue.location.city}</span>
            </div>
        )
    }
  }