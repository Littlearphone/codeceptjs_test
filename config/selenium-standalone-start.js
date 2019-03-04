const selenium = require('selenium-standalone');
module.exports = function (done) {
    selenium.start(require('./selenium-drivers-config.js'), (err, child) => {
        if (err) {
            console.error(`Start selenium failed: ${err}`);
            done(err);
            return;
        }
        selenium.child = child;
        done();
    });
};
