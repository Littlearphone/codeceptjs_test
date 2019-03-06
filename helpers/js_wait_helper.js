/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/
class JSWait extends codecept_helper {
    _afterStep(step) {
        if (step.name === 'click') {
            // return this.helpers['WebDriver'].waitUntil(() => $.active === 0);
            return this.helpers['WebDriver'].waitUntil(() => true);
        }
    }
}

module.exports = JSWait;
