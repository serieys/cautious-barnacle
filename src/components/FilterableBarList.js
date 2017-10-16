import React, { Component } from 'react';
import SearchBar from './SearchBar'
import { getBarListWithQuery } from '../utils/Api';
/**
 * SearchBar component.
 */
class FilterableBarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
          venues: {},
        };
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
          filterText: filterText
        });
        this.searchBarWithQuery(filterText);
        console.log(this.state.venues);
    }

      searchBarWithQuery = (query) => {
        getBarListWithQuery(query).then((venues) => {
            this.setState({
                venues: venues
            });
        })
      }
      render() {
        return (
          <div>
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFilterTextChange}
            />
          </div>
        );
      }
  }

  export default FilterableBarList
