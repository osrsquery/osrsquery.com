'use strict';

import {Position} from './Position.js';

class Locations {

    constructor() {
        this.locations = [];  
    }   
    getLocations(callback) {
        if (this.locations.length > 0) {
            callback(this.locations,this.locationsNames);
            return;
        }
        
        $.ajax({
            url: "https://raw.githubusercontent.com/osrsquery/osrs-tiles/main/locations.json",
            dataType: "json",
            context: this,
            success: function( data ) {
                var locations = data["locations"];
                
                for (var i in locations) {
                    this.locations.push({
                        "name": locations[i].name,
                        "position": new Position(locations[i].coords[0], locations[i].coords[1] + 1, locations[i].coords[2]),
                        "size": locations[i].size
                    });
                }
        
                callback(this.locations,this.locationsNames);
            }
        });
    }
}

export default (new Locations);