import React, { Component } from 'react';
import Leaflet from 'leaflet'

import { getBarListWithQuery , getBarInfo} from '../utils/Api';

import SearchBar from './SearchBar'
import BarList from './BarList'
import BarInfo from './BarInfo'
import BarMap from './BarMap'

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

    componentDidMount() {
        this.searchBarWithQuery("");
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
          filterText: filterText
        });
        this.searchBarWithQuery(filterText);
    }

    handleVenueClick = (venueID) => {
        this.searchBarInfo(venueID);
    }

    searchBarInfo = (id) => {
        getBarInfo(id).then((venue) => {
            this.setState({
                selectedVenue: <BarInfo
                venue={venue}
            />
            });
        }
    )}

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
            <BarMap
                venues={this.state.venues}
                onVenueClick={this.handleVenueClick}
            />
            {this.state.selectedVenue}
          </div>
        );
      }
  }

  export default FilterableBarList
