define(['flight/lib/component', 'mixins/loggerMixin'], function(defineComponent, loggerMixin) {
    
    'use strict';
    
    function hashComponent() {
        
        var getHash = function() {
            return window.location.hash.substring(1);
        };
        
        this.uiItemSelectionChanged = function(event, request) {
            this.info('hashComponent', 'uiItemSelectionChanged');
            if (request.id !== getHash()) {
                window.location.hash = request.id;
            }
        };
    
        this.hashchange = function() {
            this.info('hashComponent', 'hashchange');
            this.trigger(document, 'uiItemSelectionChanged', {id: getHash()});
        };
        
        this.after('initialize', function() {
            this.on(window, 'hashchange', this.hashchange);
            this.on(document, 'uiItemSelectionChanged', this.uiItemSelectionChanged);
            
            this.hashchange();
        });
    }
    
    return defineComponent(hashComponent, loggerMixin);
});