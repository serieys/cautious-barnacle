import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class BarMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    handleClick = (e) => {
        this.props.onVenueClick(e.id);
    }


    render() {
        var markers = [];
        var firstVenuePosition = [44.84012594817427, -0.5734411756532316];
        if(!(Object.keys(this.props.venues).length === 0 && this.props.venues.constructor === Object)) {
            var firstVenueBool = true;
            this.props.venues.forEach((venue) => {
                const position = [venue.location.lat, venue.location.lng];
                if(firstVenueBool) {
                    firstVenuePosition = position;
                    firstVenueBool = !firstVenueBool;
                }
                  markers.push(
                    <Marker position={position} onClick={() => this.handleClick(venue)}>
                    <Popup>
                      <span>{venue.name}<br/>{venue.location.address}</span>
                    </Popup>
                  </Marker>
                  );
              });

        }
        const position = firstVenuePosition;
        const map = (
          <Map center={position} zoom={15}>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers}
          </Map>
        );
        return(
            <div id='map-container'>{map}</div>
        )
    }
  }