'use strict';

const AppModulePath = require('app-module-path');
const Path = require('path');

let appRoot = Path.resolve(__dirname);

AppModulePath.addPath(__dirname);
AppModulePath.addPath(Path.resolve(__dirname, './src'));

require(`${appRoot}/src/server/server.js`);
