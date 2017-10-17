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
            this.props.venues.forEach((product) => {
                  rows.push(
                    <BarRow
                    venue={product}
                    />
                  );
              });
              return (
                <div>{rows}</div>
              );

        }
        else {
            return null;
        }
    }
  }