define(['flight/lib/component'], function(defineComponent) {
    
    'use strict';
    
    function listComponent() {
        
        this.dataItemsServed = function(event, data) {
            var markup = '';
            $.each(data.data, function(index, value) {
                markup += "<li id=\"" + value.id + "\" class=\"list-group-item\">" + value.name + "</li>";
            });
            
            this.$node.html(markup);
        };
        
        this.selectionChanged = function(event) {
            var id = event.target.id;
            this.trigger('uiItemSelectionChanged', {id: id});
        };
        
        this.after('initialize', function() {
            this.on(document, 'dataItemsServed', this.dataItemsServed);
            this.on('click', this.selectionChanged);
            this.trigger('uiItemsRequested');
        });
    }
    
    return defineComponent(listComponent);
});