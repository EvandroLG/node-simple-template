const File = require('./lib/file');

const params = require('./lib/params')(process.argv);
const file = new File(params);
const data = file.read();
file.parseAndUpdate(data);
