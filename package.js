Package.describe({
  name: 'revol:standard-minifier-js',
  version: '1.1.0',
  summary: 'Harmony javascript minifiers used with Meteor apps by default.',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: "minifyStdJS",
  use: [
    'revol:minifier-js@1.0.0',
    'babel-compiler@6.13.0',
    'ecmascript@0.6.1'
  ],
  sources: [
    'plugin/minify-js.js',
    'plugin/stats.js',
    'plugin/visitor.js',
    'plugin/utils.js',
  ],
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});
