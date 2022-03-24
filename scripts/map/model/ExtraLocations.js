'use strict';

import {Position} from './Position.js';

class ExtraLocations {

    constructor() {
        this.locations = [];  
    }   
    getLocations(callback) {
        if (this.locations.length > 0) {
            callback(this.locations,this.locationsNames);
            return;
        }
        
        $.ajax({
            url: "https://raw.githubusercontent.com/osrsquery/osrs-tiles/main/extra_labels.json",
            dataType: "json",
            context: this,
            success: function( data ) {
                var locations = data["locations"];
                callback(locations,this.locationsNames);
            }
        });
    }
}

export default (new ExtraLocations);