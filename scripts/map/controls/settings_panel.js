export class SettingPanel {
    
    isSettingsExpanded = false;
    map;

    constructor(map) {
        this.map = map;
    }

    onLoad() {

        //Setup Map Layer Type
        $('#setLayer').prop("selectedIndex", this.getIntOrDefualt(localStorage.layerselected,0));
        $('.leaflet-control-layers-selector')[this.getIntOrDefualt(localStorage.layerselected,0)].click()

        $('#showCoordinates').prop("checked", this.getIntOrDefualt(localStorage.showCoordinates,1));
        $('#showLabels').prop("checked", this.getIntOrDefualt(localStorage.showLabels,1));

        $('#showGrid').prop("checked", this.getIntOrDefualt(localStorage.hideGrid,0));
        $('#showRegionLables').prop("checked", this.getIntOrDefualt(localStorage.hideRegionIds,0));


        var container = document.querySelector('#extra_labels');
        var checkboxesAll = container.querySelectorAll('input[type="checkbox"]');

        checkboxesAll.forEach((element) => {
            var checkBoxkey = element.id
            $('#' + checkBoxkey).prop("checked", this.getIntOrDefualt(localStorage.getItem(checkBoxkey),0));
        });
        
        this.onClick()
        this.coordsState()
        this.toggleMapLabels()
        this.toggleGridLabels()
    }

    onClick()  {

        var container = document.querySelector('#extra_labels');
        var checkboxesAll = container.querySelectorAll('input[type="checkbox"]');

        checkboxesAll.forEach((element) => {
            $('#' + element.id).on("click", (event) => { 
                var found = event.currentTarget.checked;
                localStorage.setItem(element.id, found? 1: 0);
            });
        });
        
        $('#settings').on("click", (event) => { 
            this.trigger();
        });
      
    
        $("#setLayer").on("click", (event) => { 
            var found = event.currentTarget.selectedIndex;
            $('.leaflet-control-layers-selector')[found].click()
            localStorage.setItem('layerselected', found);
        });

        $("#showCoordinates").on("click", (event) => { 
            var found = event.currentTarget.checked;
            localStorage.setItem('showCoordinates',found? 1: 0);
            this.coordsState()
        });

        $("#showLabels").on("click", (event) => { 
            var found = event.currentTarget.checked;
            localStorage.setItem('showLabels', found? 1: 0);
            this.toggleMapLabels()
        });

        $("#showRegionLables").on("click", (event) => { 
            var found = event.currentTarget.checked;
            localStorage.setItem('hideRegionIds', found? 1: 0);
            this.toggleGridLabels()
        });
    }



    coordsState() {
    
        const elements = document.getElementsByClassName('leaflet-bar leaflet-control');
        let index = -1
        let disabled = this.getIntOrDefualt(localStorage.showCoordinates,1) != 1
    
        for (const e of elements) {
            if(index > 3) return
            if(disabled) {
                $(e).hide()
            } else {
                $(e).show()
            }
            index += 1
        }
     
    }

    trigger() {
        const $marginRighty = $('.inner');
        const rightOffset = this.isSettingsExpanded ? 0 : -$marginRighty.outerWidth();
        $marginRighty.animate({right: rightOffset}, 300);
        this.isSettingsExpanded = !this.isSettingsExpanded;
    }
   
    
    getIntOrDefualt(name, defualt) {
        return parseInt(name || defualt);
    }

    toggleMapLabels() {
        if (this.getIntOrDefualt(localStorage.showLabels,1) == 1) {
            this.map.getPane("map-labels").style.display = "";
        } else {
            this.map.getPane("map-labels").style.display = "none";

        }
    }


    toggleGridLabels() {
        if (this.getIntOrDefualt(localStorage.hideRegionIds,0) == 0) {
            this.map.getPane("region-labels").style.display = "none";
        } else {
            this.map.getPane("region-labels").style.display = "";
        }
    }


}