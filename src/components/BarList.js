import React, { Component } from 'react';

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
                    <p>{product.name}</p>
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