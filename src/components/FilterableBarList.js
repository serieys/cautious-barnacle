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
          showResults: false
        };
    }

    componentDidMount() {
        this.searchBarWithQuery("");
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
          filterText: filterText,
          showResults: true,
        });
        this.searchBarWithQuery(filterText);
    }

    handleVenueClick = (venueID) => {
        this.searchBarInfo(venueID);
        this.setState({
            showResults: false,
          });
    }

    searchBarInfo = (id) => {
        getBarInfo(id).then((venue) => {
            this.setState({
                selectedVenue: <BarInfo
                venue={venue}
            />,
                filterText: venue.name,
            });
            this.searchBarWithQuery(venue.name);
        }
    )}

    handleClick = () => {
        this.setState({
            showResults: true,
          });
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
        <div className="container">
            <div className="columns">
                <h1 className="title column col-12">Venues search</h1>
                <div className="column col-6 col-md-8 col-xs-12 col-mx-auto searchInput">
                    <div className="form-autocomplete">
                        <SearchBar
                            filterText={this.state.filterText}
                            onFilterTextChange={this.handleFilterTextChange}
                            onClick={ this.handleClick }
                        />
                        { this.state.showResults ? <BarList
                            venues={this.state.venues}
                            onVenueClick={this.handleVenueClick}
                        /> : null }
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column col-8 col-md-12">
                    <BarMap
                        venues={this.state.venues}
                        onVenueClick={this.handleVenueClick}
                    />
                </div>
                <div className="column col-4 col-md-12">
                    {this.state.selectedVenue}
                </div>
            </div>
        </div>
        );
      }
  }

  export default FilterableBarList
