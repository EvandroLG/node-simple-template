const fs = require('fs');
const path = require('path');

class File {
    constructor(params) {
        this.config = require(params['-c']);
        this.dir = params['-d'];
        this.filename = params['-f'];
    }

    read(callback) {
        return fs.readFile(`${this.filename}`, 'utf8', callback);
    }

    parseAndUpdate(error, data) {
        let output = data;

        for (const key in this.config) {
            const regexp = new RegExp(`({{${key}}})`, 'g');
            output = output.replace(regexp, this.config[key]);
        }

        const os = process.platform === "win32" ? 'win32' : 'posix';
        const basename = path[os].basename(this.filename);
        const newFile = path.join(this.dir, basename);

        fs.writeFile(newFile, output, 'utf8', error => {
            if (error) throw error;
            console.log('builded!');
        });
    }
}

module.exports = File;
