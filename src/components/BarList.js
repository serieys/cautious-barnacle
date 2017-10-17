import React, { Component } from 'react';
import BarRow from './BarRow'

/**
 * BarList component.
 */
export default class BarList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    

    render() {
        const rows = [];
        if(!(Object.keys(this.props.venues).length === 0 && this.props.venues.constructor === Object)) {
            this.props.venues.forEach((venue) => {
                  rows.push(
                    <BarRow
                    venue={venue}
                    onVenueClick ={this.props.onVenueClick}
                    />
                  );
              });
              return (
                <ul className="menu">
                    {rows}
                </ul>
              );

        }
        else {
            return null;
        }
    }
  }