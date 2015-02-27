define(['app/myFirstComponent'], function(myFirstComponent) {
    
    'use strict';
    
    function initialise() {
        myFirstComponent.attachTo(document);
    }
    
    return initialise;
});