define(['components/dataComponent', 'components/detailComponent', 'components/listComponent'], 
    function(dataComponent, detailComponent, listComponent) {
    
    'use strict';
    
    function initialize() {
        dataComponent.attachTo(document);
        detailComponent.attachTo('#detail');
        listComponent.attachTo('#list');
    }
    
    return initialize;
});