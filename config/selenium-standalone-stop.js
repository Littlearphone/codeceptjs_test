const selenium = require('selenium-standalone');
module.exports = function (done) {
    try {
        done();
    } catch (e) {
        console.log(e);
    }
    // Delay to kill selenium process
    setTimeout(() => {
        if (selenium.child) {
            selenium.child.kill();
        }
    }, 3000);
};
