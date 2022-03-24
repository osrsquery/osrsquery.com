$.fn.clearSelect = function() {
    return this.each(function() {
        if (this.tagName == 'SELECT')
            this.options.length = 0;
    });
}

$.fn.fillSelect = function(data) {
    this.value = "dfdf";
    return this.clearSelect().each(function() {
        if (this.tagName == 'SELECT') {
            var dropdownList = this;
            if (data.length > 0) {
                this.disabled = false;
            }

            $.each(data, function(index, optionData) {
                var option = new Option(optionData, optionData);

                dropdownList.add(option, null);
            });
        }
        this.value = "fdg"
    });
}


