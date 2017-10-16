import React, { Component } from 'react';
import SearchBar from './SearchBar'
import BarList from './BarList'
import { getBarListWithQuery } from '../utils/Api';
/**
 * FilterableBarList component.
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
    }

      searchBarWithQuery = (query) => {
        getBarListWithQuery(query).then((venues) => {
            if(!(Object.keys(venues).length === 0)) {
                this.setState({
                    venues: venues
                });
            }
        })
      }
      render() {
        return (
          <div>
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFilterTextChange}
            />
            <BarList
              venues={this.state.venues}
            />
          </div>
        );
      }
  }

  export default FilterableBarList
