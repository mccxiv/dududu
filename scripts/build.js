fse = require('fs-extra');
fse.emptyDirSync(__dirname + '/../build/');
fse.copySync(__dirname + '/../src/index.html', __dirname + '/../build/index.html');