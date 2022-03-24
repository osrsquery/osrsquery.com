'use strict';

import { CanvasLayer } from '../external/L.CanvasLayer.js';
import ExtraLocations from "../model/ExtraLocations.js";
import Locations from '../model/Locations.js';
import { Position } from '../model/Position.js';

var ExtraMapLabelsCanvas = CanvasLayer.extend({
    setData: function (data) {
        this.needRedraw();
    },

    
   
    onDrawLayer: function (info) {
       
        var ctx = info.canvas.getContext('2d');
        ctx.clearRect(0, 0, info.canvas.width, info.canvas.height);
        var self = this;
        ExtraLocations.getLocations(function (locations) {
            locations.forEach(function (data) {
                
             
                if((localStorage.getItem(data.type) || 0) == 1 ) {
                    var position = new Position(data.coords[0], data.coords[1], data.coords[2]);
                
                    var latLng = position.toCentreLatLng(self._map);
                    var canvasPoint = info.layer._map.latLngToContainerPoint(latLng);
    
    
                    const loadImage = src =>
                        new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => resolve(img);
                        img.onerror = reject;
                        img.src = src;
                    });
                
        
                    var path
                    var icon = data.icon
                    if(data.type.includes("_")) {
                        var dir  = data.type.split("_")
                        path = '../resources/map/labels/' + dir[0] + '/' + dir[1]  + '/' +  icon
                    } else {
                        path = '../resources/map/labels/' + data.type + '/' +  icon
                    }
             
                    
                    loadImage(path).then(image => 
                        ctx.drawImage(image, canvasPoint.x - (image.width / 2), canvasPoint.y - (image.width / 2))
                    )
                }
                
               
            });
            
        });
    }
});


export var ExtraLabelControl = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        map.createPane("map-labels1");

        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control noselect');
       
        this._mapLabelsCanvas = new ExtraMapLabelsCanvas({ pane: "map-labels1" });
        this._map.addLayer(this._mapLabelsCanvas);

        map.on('planeChanged', function () {
            this._mapLabelsCanvas.drawLayer();
        }, this);
        $(container).hide()
        return container;
    },

   
});