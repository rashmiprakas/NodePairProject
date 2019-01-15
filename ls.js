module.exports = function () {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        if (cmd === 'ls') {
            fs.rea
        }
        process.stdout.write('\nprompt > ');
    });
}