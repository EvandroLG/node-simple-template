const path = require('path');

module.exports = (argv, currentDir) => {
    const args = argv.slice(2);
    const size = args.length;
    const keys = ['-d', '-c', '-f'];
    let params = {};

    for (let i=0; i < size; i=i+2) {
        const key = args[i];

        if (keys.includes(key)) {
            const value = args[i+1];
            params[key] = path.join(currentDir, value);
        }
    }

    return params;
};
