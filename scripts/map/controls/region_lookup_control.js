'use strict';

import {Position} from '../model/Position.js';
import {Region, MIN_X, MAX_X, MIN_Y, MAX_Y} from '../model/Region.js';

export var RegionLookupControl = L.Control.extend({
    options: {
        position: 'topleft',
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        $(container).hide()
        return container;
    },
    
    _goToCoordinates: function(position) {
        if (this._searchMarker !== undefined) {
            this._map.removeLayer(this._searchMarker);
        }

        this._searchMarker = new L.marker(position.toCentreLatLng(this._map));

        this._searchMarker.once('click', (e) => this._map.removeLayer(this._searchMarker));

        this._searchMarker.addTo(this._map);

        this._map.panTo(this._searchMarker.getLatLng());

        if (this._map.plane != position.z) {
            this._map.plane = position.z;
            this._map.updateMapPath();
        }
    }
});