fse = require('fs-extra');
fse.emptyDir(__dirname + '/build');
fse.copySync(__dirname + '/src/index.html', __dirname + '/build');