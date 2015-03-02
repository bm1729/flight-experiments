define(['flight/lib/component'], function(defineComponent) {
    
    'use strict';
    
    function detailComponent() {
    
        this.dataItemServed = function(event, datum) {
            var markup = "<h3>" + datum.name + "</h3><div>" + datum.details + "</div>";
            
             this.$node.html(markup);
        };
        
        this.uiItemSelectionChanged = function(data, selection) {
            this.trigger('uiItemRequested', selection);
        };
        
        this.after('initialize', function() {
            this.on(document, 'uiItemSelectionChanged', this.uiItemSelectionChanged);
            this.on(document, 'dataItemServed', this.dataItemServed);
        });
    }
    
    return defineComponent(detailComponent);
});