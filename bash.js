
const prompt = (data) => {
    console.log(data);
    process.stdout.write('>');

};
//process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');

    switch (cmd) {
        case 'pwd':
            prompt(require('./pwd')());
            break;
        case 'ls':
            prompt(require('./ls')());
            break;
        default:
            prompt('not found');
    }
});

