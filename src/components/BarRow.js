import React, { Component } from 'react';

/**
 * BarRow component.
 */
export default class BarRow extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    handleClick = (e) => {
        this.props.onVenueClick(e.id);
    }

    render() {
        return(
            <li className="menu-item" onClick={() => this.handleClick(this.props.venue)}>
            <a href="#">
              <div className="tile tile-centered">
                <div className="tile-content">
                {this.props.venue.name}
                </div>
              </div>
            </a>
          </li>
        )
    }
  }