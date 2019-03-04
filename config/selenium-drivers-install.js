const selenium = require('selenium-standalone');
// Download selenium from internet
const config = require('./selenium-drivers-config.js');
selenium.install(Object.assign({
    logger: (message) => { console.log(message); },
    progressCb: (totalLength, progressLength, chunkLength) => { }
}, config), (err) => {
    if (err) {
        console.error(`Install selenium failed: ${err}`);
        return;
    }
    console.log('Install selenium complete.');
});

