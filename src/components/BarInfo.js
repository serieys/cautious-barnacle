import React, { Component } from 'react';



/**
 * BarInfo component.
 * Show info of a specified bar.
 */
export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
        <div className="card">
            <div className="card-header">
                <div className="card-title h5">{this.props.venue.name}</div>
                <div className="card-subtitle text-gray">{this.props.venue.location.address}, {this.props.venue.location.postalCode} {this.props.venue.location.city}</div>
            </div>
            <div className="card-body">
            {this.props.venue.likes.count} likes
            </div>
        </div>
      );
    }
  }