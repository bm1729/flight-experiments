/* globals describeComponent, it, expect, spyOnEvent, beforeEach, setupComponent */

describeComponent('component/dataComponent', function() {
    
    "use strict";
    
    beforeEach(function() {
        this.setupComponent();
    });

    it('uiItemsRequested', function() {
        spyOnEvent(document, 'dataItemsServed');
        this.component.trigger('uiItemsRequested');
        expect('dataItemsServed').toHaveBeenTriggeredOn(document);
    });

    it('uiItemRequested', function() {
        spyOnEvent(document, 'dataItemServed');
        this.component.trigger('uiItemRequested', {id: 1});
        expect('dataItemServed').toHaveBeenTriggeredOn(document);
    });
});