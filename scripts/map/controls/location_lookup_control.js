'use strict';

import Locations from '../model/Locations.js';
import {Position} from '../model/Position.js';

export var LocationLookupControl = L.Control.extend({
    options: {
        position: 'topleft',
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
      
        $(container).hide()
        return container;
    },

    _goToCoordinates: function(x, y, z) {
        if (this._searchMarker !== undefined) {
            this._map.removeLayer(this._searchMarker);
        }

        this._searchMarker = new L.marker(new Position(x, y, z).toCentreLatLng(this._map));

        this._searchMarker.once('click', (e) => this._map.removeLayer(this._searchMarker));

        this._searchMarker.addTo(this._map);

        this._map.panTo(this._searchMarker.getLatLng());

        if (this._map.plane != z) {
            this._map.plane = z;
            this._map.updateMapPath();
        }
    }

});