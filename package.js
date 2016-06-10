Package.describe({
  name: 'morwal89:angular-bootstrap-scrolling-tabs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'angular bootstrap scrolling tabs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/morwalz/meteor-angular-bootstrap-scrolling-tabs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('angular-bootstrap-scrolling-tabs.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('morwal89:angular-bootstrap-scrolling-tabs');
  api.mainModule('angular-bootstrap-scrolling-tabs-tests.js');
});