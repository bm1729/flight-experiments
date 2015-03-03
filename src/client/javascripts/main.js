define(['components/dataComponent', 'components/detailComponent', 'components/listComponent', 'components/hashComponent'], 
    function(dataComponent, detailComponent, listComponent, hashComponent) {
    
    'use strict';
    
    function initialize() {
        hashComponent.attachTo(window);
        dataComponent.attachTo(document);
        detailComponent.attachTo('#detail');
        listComponent.attachTo('#list');
    }
    
    return initialize;
});