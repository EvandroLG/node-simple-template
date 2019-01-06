const fs = require('fs');
const { promisify } = require('util');

class File {
    constructor(params) {
        this.config = require(params['-c']);
        this.dir = params['-d'];
        this.filename = params['-f'];

        this.readFile = promisify(fs.readFile);
    }

    async read() {
        return await readFile(`./${this.filename}`, 'utf8');
    }

    parseAndUpdate(data) {
        let output = data;

        for (const key of this.config) {
            const regexp = new RegExp(`({{${key}}})`, 'g');
            output = output.replace(regexp, config[key]);
        }

        fs.writeFile(`${dir}${filename}`, output, 'utf8', (error) => {
            if (error) throw error;
            console.log('builded!');
        });
    }
}

module.exports = File;
