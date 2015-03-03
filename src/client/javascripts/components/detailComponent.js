define(['flight/lib/component', 'mixins/loggerMixin'], function(defineComponent, loggerMixin) {
    
    'use strict';
    
    function detailComponent() {
        
        var currentlySelectedId = null;
    
        this.dataItemServed = function(event, datum) {
            this.info('detailComponent', 'dataItemServed');
            var markup = "<h3>" + datum.name + "</h3><div>" + datum.details + "</div>";
            
             this.$node.html(markup);
        };
        
        this.uiItemSelectionChanged = function(data, selection) {
            if (selection.id !== currentlySelectedId) {
                currentlySelectedId = selection.id;
                this.info('detailComponent', 'uiItemSelectionChanged');
                this.trigger('uiItemRequested', selection);
            }
        };
        
        this.after('initialize', function() {
            this.on(document, 'uiItemSelectionChanged', this.uiItemSelectionChanged);
            this.on(document, 'dataItemServed', this.dataItemServed);
        });
    }
    
    return defineComponent(detailComponent, loggerMixin);
});