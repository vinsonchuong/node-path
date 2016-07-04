'use strict';
const Module = require('module').Module;
module.exports = function() {
  process.env.NODE_PATH = Array.prototype.join.call(arguments, ':');
  Module._initPaths();
};
