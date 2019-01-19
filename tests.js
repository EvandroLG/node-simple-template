const path = require('path');
const assert = require('assert');
const params = require('./lib/params');
const validation = require('./lib/validation');

const initialFixture = ['/usr/local/bin/node', __dirname];

describe('simple-template', () => {
    describe('params', () => {
        it('should return an object with correct key-value structure', () => {
            const dir = 'src';
            const args = ['-f', 'index.html', '-c', 'config.json', '-d', 'dist'];
            const actual = params([...initialFixture, ...args], dir);
            const expected = {
                '-f': path.join(dir, 'index.html'),
                '-c': path.join(dir, 'config.json'),
                '-d': path.join(dir, 'dist')
            };

            assert.deepEqual(actual, expected);
        });
    });

    describe('validation', () => {
        function verify(args, isValid) {
            const cachedExit = process.exit;
            let wasExitCalled = false;
            process.exit = () => {
                wasExitCalled = true;
            };

            const cachedConsole = console.log;
            let wasConsoleCalled = false;
            console.log = () => {
                wasConsoleCalled = true;
            };

            validation(args);

            console.log = cachedConsole;
            process.exit = cachedExit;


            console.log(cachedConsole);

            assert.equal(wasExitCalled, !isValid);
            assert.equal(wasConsoleCalled, !isValid);
        }

        it('should not call any function when validation does not have any problem', () => {
            verify(['-f', 'index.html', '-c', 'config.json', '-d', 'dist'], true);
        });

        it('should print an message error and finish the process when validation fails', () => {
            verify(['-f', 'index.html', '-c', 'config.json'], false);
        });
    });
});
