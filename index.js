#!/usr/bin/env node

/*
  * simple-template
  * http://github.com/EvandroLG/node-compressor
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/evandrolg
  * License: MIT
*/

const File = require('./lib/file');

const params = require('./lib/params')(process.argv, process.cwd());
const file = new File(params);
file.read(file.parseAndUpdate.bind(file));
