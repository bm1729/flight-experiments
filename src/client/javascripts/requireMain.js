/* globals requirejs */

(function() {

  'use strict';
  
  requirejs.config({
    baseUrl: '',
    paths: {
      'flight': '/third-party/flight',
      'app': '/app/javascripts'
    }
  });
  
  require(
    [
      'flight/lib/debug'
    ],
  
    function(debug, main) {
      debug.enable(true);
      require(['app/main'], function(initialize) {
        initialize();
        console.log('Require started correctly!');
      });
    }
  );
  
})();