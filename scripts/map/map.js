'use strict';

import { Position } from './model/Position.js';

// Import controls
import { CollectionControl } from './controls/collection_control.js';
import { CoordinatesControl } from './controls/coordinates_control.js';
import { LocalCoordinatesControl } from './controls/local_coordinates_control.js';
import { RegionBaseCoordinatesControl } from './controls/region_base_coordinates_control.js';
import { GridControl } from './controls/grid_control.js';
import { MapLabelControl } from './controls/map_label_control.js';
import { ExtraLabelControl } from './controls/extra_label_control.js';
import { PlaneControl } from './controls/plane_control.js';
import { RegionLabelsControl } from './controls/region_labels_control.js';
import { RegionLookupControl } from './controls/region_lookup_control.js';
import { SettingPanel } from './controls/settings_panel.js';

import {Region, MIN_X, MAX_X, MIN_Y, MAX_Y} from './model/Region.js';


let lookup = new RegionLookupControl()
let quick_locations;



function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
}

function getLocationByName(code) {
    return quick_locations.filter(
        function(quick_locations){return quick_locations.name == code}
    );
}
let settings;


$(document).ready(function () {

    $.getJSON('https://raw.githubusercontent.com/osrsquery/osrs-tiles/main/quick_locations.json', function(data) {
        quick_locations = data;
        var quick_location_names = new Array(quick_locations.size);
        quick_locations.forEach(function(obj) { quick_location_names.push(obj.name); });
        quick_location_names.shift();
        $("#goLocation").fillSelect(quick_location_names);
        setSelectedValue( document.getElementById("goLocation"), "Runescape Surface")

    });



    const currentUrl = new URL(window.location.href);

    const urlCentreX = currentUrl.searchParams.get("centreX");
    const urlCentreY = currentUrl.searchParams.get("centreY");
    const urlCentreZ = currentUrl.searchParams.get("centreZ");
    const urlZoom = currentUrl.searchParams.get("zoom");

    const urlRegionID = currentUrl.searchParams.get("regionID");


    var base = {
        'Normal': L.tileLayer('https://raw.githubusercontent.com/osrsquery/osrs-tiles/main/normal/' + 0 + '/{z}/{x}/{y}.png', {
            'minZoom': 4,
            'maxZoom': 11,
            'noWrap': true,
            'tms': true
        }),
        'Height Map': L.tileLayer('https://raw.githubusercontent.com/osrsquery/osrs-tiles/main/heightmap/' + 0 + '/{z}/{x}/{y}.png', {
          'minZoom': 4,
          'maxZoom': 11,
    
          'noWrap': true,
          'tms': true
        })
    };

    var map = L.map('map', {
        zoomControl: false,
        'layers': [
            base.Normal
        ],
        renderer: L.canvas()
    });


    map.plane = 0;


    $('#goLocation').change(function() {
        
        var found = getLocationByName($(this).val());
        var thing = JSON.stringify(found).substring(1)
        var pos = thing.lastIndexOf(']');
        const myObj = JSON.parse(thing.substring(0,pos) + " " + thing.substring(pos+1));
        
        var x = myObj["position"][0]
        var y = myObj["position"][1]
        var plane = myObj["position"][2]

        lookup._goToCoordinates(new Position(x,y,plane));
    })


     
    $.getJSON('https://raw.githubusercontent.com/osrsquery/osrs-tiles/main/locations.json', function(data) {
        
        var locationData = {};
        data.locations.forEach(function(obj) { 
            locationData[obj.name.replace("<br>"," ")] = obj.coords;
        });


        $("#locationSearch").autocomplete({
            source: Object.keys(locationData), 
            focus: function(e,ui){
                $(this).val(ui.item.label);
                return false;
            },   
            select: function(e, ui) {
                let x = locationData[ui.item.value][0]
                let y = locationData[ui.item.value][1]
                let plane = locationData[ui.item.value][2]
                lookup._goToCoordinates(new Position(x,y,plane))
                $("locationSearch").value = '';
            }    
        }); 
   
      
    });

    $('#regionSearch').keyup(function(event) {


        var regionIDText = event.target.value;
            
        if (regionIDText.length == 0) {
            return;
        }
        
        var regionID = parseInt(regionIDText);
        
        var position = new Region(regionID).toCentrePosition();
        
        if (position.x >= MIN_X && position.x <= MAX_X && position.y >= MIN_Y && position.y <= MAX_Y) {
            lookup._goToCoordinates(position);
        }
       
    });

    L.control.layers(base).addTo(map);

    map.updateMapPath = function () {
        if (map.tile_layer !== undefined) {
            map.removeLayer(map.tile_layer);
        }
        
    
        map.invalidateSize();
    }


    $('.leaflet-control-layers').hide()


    map.updateMapPath();
    map.getContainer().focus();

    map.addControl(new CoordinatesControl());
    map.addControl(new RegionBaseCoordinatesControl());
    map.addControl(new LocalCoordinatesControl());
    map.addControl(L.control.zoom());
    map.addControl(new PlaneControl());
    map.addControl(new MapLabelControl());
    map.addControl(new ExtraLabelControl());
    map.addControl(new CollectionControl({ position: 'topright' }));

    map.addControl(new GridControl());
    map.addControl(new RegionLabelsControl());


    map.addControl(lookup);
    var prevMouseRect, prevMousePos;
    map.on('mousemove', function (e) {
        var mousePos = Position.fromLatLng(map, e.latlng, map.plane);

        if (prevMousePos !== mousePos) {

            prevMousePos = mousePos;

            if (prevMouseRect !== undefined) {
                map.removeLayer(prevMouseRect);
            }

            prevMouseRect = mousePos.toLeaflet(map);
            prevMouseRect.addTo(map);
        }
    });

    const setUrlParams = () => {
        const mapCentre = map.getBounds().getCenter()
        const centrePos = Position.fromLatLng(map, mapCentre, map.plane);

        const zoom = map.getZoom();

        window.history.replaceState(null, null, `?centreX=${centrePos.x}&centreY=${centrePos.y}&centreZ=${centrePos.z}&zoom=${zoom}`);
    };

    map.on('move', setUrlParams);
    map.on('zoom', setUrlParams);

    let zoom = 7;
    let centreLatLng = [-79, -137]

    if (urlZoom) {
        zoom = urlZoom;
    }

    if (urlCentreX && urlCentreY && urlCentreZ) {
        const centrePos = new Position(Number(urlCentreX), Number(urlCentreY), Number(urlCentreZ));
        centreLatLng = centrePos.toLatLng(map);
    } else if (urlRegionID) {
        const region = new Region(Number(urlRegionID));
        const centrePos = region.toCentrePosition()
        centreLatLng = centrePos.toLatLng(map);
        zoom = urlZoom || 9;
    }

    map.setView(centreLatLng, zoom)

    settings = new SettingPanel(map);
    settings.onLoad();
});
