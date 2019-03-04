class ConditionalElement extends Helper {
    async doIfVisible(selector, callback, ...options) {
        const helper = this.helpers['WebDriver'];
        try {
            const numVisible = await helper.grabNumberOfVisibleElements(selector, options);
            if (numVisible) {
                callback.call(helper, ...options);
            }
        } catch (err) {
            console.log('Skipping operation as element is not visible');
        }
    }

    async doIfInvisible(selector, callback, ...options) {
        const helper = this.helpers['WebDriver'];
        try {
            const numVisible = await helper.grabNumberOfVisibleElements(selector, options);
            if (!numVisible) {
                callback.call(helper, ...options);
            }
        } catch (err) {
            console.log('Skipping operation as element is not visible');
        }
    }

    async clickIfVisible(selector, ...options) {
        const helper = this.helpers['WebDriver'];
        try {
            const numVisible = await helper.grabNumberOfVisibleElements(selector, options);
            if (numVisible) {
                helper.click(helper, ...options);
            }
        } catch (err) {
            console.log('Skipping operation as element is not visible');
        }
    }

    async clickIfInvisible(selector, ...options) {
        const helper = this.helpers['WebDriver'];
        try {
            const numVisible = await helper.grabNumberOfVisibleElements(selector, options);
            if (!numVisible) {
                helper.click(helper, ...options);
            }
        } catch (err) {
            console.log('Skipping operation as element is not visible');
        }
    }
}

module.exports = ConditionalElement;
