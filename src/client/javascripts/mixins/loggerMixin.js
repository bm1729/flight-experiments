define(function() {
    
    return function() {
        this.info = function(component, message) {
            console.info(component + ": " + message);
        };
    };
});