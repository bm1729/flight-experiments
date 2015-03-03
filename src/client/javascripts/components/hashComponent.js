define(['flight/lib/component'], function(defineComponent) {
    
    'use strict';
    
    function hashComponent() {
        
        var getHash = function() {
            return window.location.hash.substring(1);
        };
        
        this.uiItemSelectionChanged = function(event, request) {
            if (request.id !== getHash()) {
                window.location.hash = request.id;
            }
        };
    
        this.hashchange = function(event) {
            this.trigger(document, 'uiItemSelectionChanged', {id: getHash()});
        };
        
        this.after('initialize', function() {
            this.on(window, 'hashchange', this.hashchange);
            this.on(document, 'uiItemSelectionChanged', this.uiItemSelectionChanged);
        });
    }
    
    return defineComponent(hashComponent);
});