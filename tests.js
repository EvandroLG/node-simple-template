const path = require('path');
const assert = require('assert');
const params = require('./lib/params');

const initialFixture = ['/usr/local/bin/node', __dirname];

describe('params', () => {
    function verify(args) {
        const dir = 'src';
        const actual = params([...initialFixture, ...args], dir);
        const expected = {
            '-f': path.join(dir, 'index.html'),
            '-c': path.join(dir, 'config.json'),
            '-d': path.join(dir, 'dist')
        };

        assert.deepEqual(actual, expected);
    }

    it('should return an object with correct key-value structure', () => {
        const args = ['-f', 'index.html', '-c', 'config.json', '-d', 'dist'];
        verify(args);
    });
});
