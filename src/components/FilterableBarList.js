import React, { Component } from 'react';

import { getBarListWithQuery , getBarInfo} from '../utils/Api';

import SearchBar from './SearchBar'
import BarList from './BarList'
import BarInfo from './BarInfo'
import BarMap from './BarMap'

/**
 * FilterableBarList component.
 * Main component.
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

    /**
     * Handle the text change of the search input
     * @param {string} filterText - The string containing the value of the search input.
     */
    handleFilterTextChange = (filterText) => {
        this.setState({
          filterText: filterText,
          showResults: true,
        });
        this.searchBarWithQuery(filterText);
    }

    /**
     * Handle the venue info change when clicking on a venue
     * @param {number} venueID - the ID of the venue you want to get the infos.
     */
    handleVenueClick = (venueID) => {
        this.searchBarInfo(venueID);
        this.setState({
            showResults: false,
          });
    }


    /**
     * Handle when you click inside the input.
     */
    handleClick = () => {
        this.setState({
            showResults: true,
          });
    }

    /**
     * This make the api call + store the values we need about multiples venues.
     * @param {string} query - the query is the term for the research.
     */
      searchBarWithQuery = (query) => {
        getBarListWithQuery(query).then((venues) => {
            if(!(Object.keys(venues).length === 0)) {
                this.setState({
                    venues: venues
                });
            }
        })
      }

      /**
     * This make the api call + store the values we need about a venue.
     * @param {number} id - the ID of the venue you want to get the infos.
     */
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
