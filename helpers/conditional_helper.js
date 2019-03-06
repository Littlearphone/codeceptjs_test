/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/
class ConditionalElement extends Helper {
    async doIfSee(selector, callback, ...options) {
        const I = this.helpers['WebDriver'];
        const numVisible = await I.grabNumberOfVisibleElements(selector, options);
        if (numVisible && typeof callback === "function") {
            callback();
        }
    }

    async doIfDontSee(selector, callback, ...options) {
        const I = this.helpers['WebDriver'];
        const numVisible = await I.grabNumberOfVisibleElements(selector, options);
        if (!numVisible && typeof callback === "function") {
            callback();
        }
    }

    async clickIfSee(selector, ...options) {
        const I = this.helpers['WebDriver'];
        try {
            const numVisible = await I.grabNumberOfVisibleElements(selector, options);
            if (numVisible) {
                I.click(selector, ...options);
            }
        } catch (err) {
            console.log('Skipping operation as element is not visible');
        }
    }

    async clickIfDontSee(selector, ...options) {
        const I = this.helpers['WebDriver'];
        try {
            const numVisible = await I.grabNumberOfVisibleElements(selector, options);
            if (!numVisible) {
                I.click(selector, ...options);
            }
        } catch (err) {
            console.log('Skipping operation as element is visible');
        }
    }
}

module.exports = ConditionalElement;
