import React, { Component } from 'react';
import BarRow from './BarRow'

/**
 * BarList component.
 * Display a list of bar.
 */
export default class BarList extends Component {
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
                    key={venue.id}
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