const path = require('path');

const validation = require('./validation');

module.exports = (argv, currentDir) => {
    const args = argv.slice(2);
    validation(args);
    const size = args.length;
    let params = {};

    for (let i=0; i < size; i=i+2) {
        const key = args[i];
        const value = args[i+1];
        params[key] = path.join(currentDir, value);
    }

    return params;
};
