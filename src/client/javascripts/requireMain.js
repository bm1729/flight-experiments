/* globals requirejs */

requirejs.config({
  baseUrl: '',
  paths: {
    'flight': '/third-party/flight'
  }
});

require(
  [
    'flight/lib/debug'
  ],

  function(debug) {
    debug.enable(true);
    require([], function() {
      console.log('Require started correctly');
    });
  }
);