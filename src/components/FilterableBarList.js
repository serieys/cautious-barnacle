import React, { Component } from 'react';
import SearchBar from './SearchBar'
/**
 * SearchBar component.
 */
export default class FilterableBarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: ''
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      }
      handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }
      render() {
        return (
          <div>
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFilterTextChange}
            />
            <p>{this.state.filterText}</p>
          </div>
        );
      }
  }