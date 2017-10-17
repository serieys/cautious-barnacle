import React, { Component } from 'react';



/**
 * SearchBar component.
 */
export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    handleFilterTextChange = (e) => {
      this.props.onFilterTextChange(e.target.value);
    }
    handleClick = () => {
      this.props.onClick();
    }
    render() {
      return (
          <div className="form-autocomplete-input form-input">
              <input
              className="form-input"
              type="text"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
              onClick={this.handleClick}
              />
            </div>
      );
    }
  }