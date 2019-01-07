module.exports = (args) => {
    ['-d', '-c', '-f'].forEach(value => {
        if (!args.includes(value)) {
            console.log(`You should pass a value to ${value}`); 
            process.exit();
        }
    });
};
