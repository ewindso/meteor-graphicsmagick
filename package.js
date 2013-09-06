Package.describe({
  summary: "Meteor smart package for GraphicsMagick node.js"
});

Npm.depends({gm: "1.12.2"});

Package.on_use(function (api) {
  api.add_files(['gm_server.js'], 'server');
  api.export('gm', 'server');
});

