const assert = require('assert');
const params = require('./lib/params');

const initialFixture = ['/usr/local/bin/node', __dirname];

describe('params', () => {
    it('should return an object with correct key-value structure', () => {
        const args = ['-f', 'index.html', '-c', 'config.json', '-d', 'dist'];
        const actual = params([...initialFixture, ...args]);
        const expected = {
            '-f': 'index.html',
            '-c': 'config.json',
            '-d': 'dist'
        };

        assert.deepEqual(actual, expected);
    });
});
