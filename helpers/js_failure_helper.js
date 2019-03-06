/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/
class JSFailure extends codecept_helper {
    _before() {
        this.err = null;
        this.helpers['WebDriver'].browser.on('error', (e) => this.err = e);
    }

    _afterStep() {
        if (this.err) {
            throw new Error('Browser JS error ' + this.err);
        }
    }
}

module.exports = JSFailure;
