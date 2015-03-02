// Karma configuration
//
// For all available config options and default values, see:
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['PhantomJS'],
    captureTimeout: 5000,
    exclude: [
      'app.js',
      'bin/www',
      '/src/client/javascripts/main.js',
      '/src/client/javascripts/requireMain.js'
    ],
    files: [
      // loaded without require
      'bower_components/es5-shim/es5-shim.js',
      'bower_components/requirejs/require.js',
      'node_modules/karma-requirejs/lib/adapter.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'bower_components/jasmine-flight/lib/jasmine-flight.js',
      // loaded with require
      {pattern: 'bower_components/flight/**/*.js', included: false},
      {pattern: 'src/client/javascripts/**/*.js', included: false},
      {pattern: 'test/client/spec/**/*.spec.js', included: false},
      // test config
      'test/client/test-main.js'
    ],
    frameworks: [
      'jasmine'
    ],
    reporters: [process.env.TRAVIS ? 'dots' : 'progress'],
    reportSlowerThan: 500,
    singleRun: false
  });
};
