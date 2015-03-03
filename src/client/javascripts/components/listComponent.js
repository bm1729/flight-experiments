/* globals $ */

define(['flight/lib/component', 'mixins/loggerMixin'], function(defineComponent, loggerMixin) {
    
    'use strict';
    
    function listComponent() {
        
        this.dataItemsServed = function(event, data) {
            this.info('listComponent', 'dataItemsServed');
            var markup = '';
            $.each(data.data, function(index, value) {
                markup += "<li id=\"" + value.id + "\" class=\"list-group-item\">" + value.name + "</li>";
            });
            
            this.$node.html(markup);
        };
        
        this.selectionChanged = function(event) {
            this.info('listComponent', 'selectionChanged');
            var id = event.target.id;
            this.trigger('uiItemSelectionChanged', {id: id});
        };
        
        this.after('initialize', function() {
            this.on(document, 'dataItemsServed', this.dataItemsServed);
            this.on('click', this.selectionChanged);
            this.trigger('uiItemsRequested');
        });
    }
    
    return defineComponent(listComponent, loggerMixin);
});