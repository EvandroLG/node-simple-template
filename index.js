const File = require('./lib/file');

const params = require('./lib/params')(process.argv, process.cwd());
const file = new File(params);
const data = file.read();
file.parseAndUpdate(data);
