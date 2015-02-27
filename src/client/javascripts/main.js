define(['app/titleComponent'], function(titleComponent) {
    
    'use strict';
    
    function initialize() {
        titleComponent.attachTo('#title');
    }
    
    return initialize;
});