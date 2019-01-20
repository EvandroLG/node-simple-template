# simple-template
Solution to insert variables into HTML.

## Installation
```js
    $ npm install node-simple-template
```

## How does it work?
`simple-template` is a simple command line tool which makes easy insert variables into HTML files.
It accepts three parameters: `-f` (file), `-c` (config file with the variables) and `-d` (directory where you will create the new html).

The template should contain the variables within two curly braces, for example `{{myVariable}}`.

To you use `simple-template`, run the following command in your terminal, passing the correct values:

```bash
    simple-template -f YOUR_FILE.html -c YOUR_CONFIG.json -d YOUR_DIST
```

Then, `simple-template` will create a new file based on the file which you provided per parameter and will replace the variables with the values taken from the configuration file. The new file will be created in the directory you passed by parameter.
