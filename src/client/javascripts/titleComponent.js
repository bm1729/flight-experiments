define(['flight/lib/component'], function(defineComponent) {
    
    'use strict';
    
    return defineComponent(function() {
        this.after('initialize', function() {
            this.$node.text('Hello World!');
        });
    });
});