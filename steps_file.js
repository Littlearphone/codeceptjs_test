/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/
const common = require("./tests/data/000_common.js");
module.exports = function () {
    return actor({
        loginAdmin() {
            this.amOnPage(common.baseUrl);
            this.fillField("#username", common.username);
            this.fillField("#password", common.password);
            this.click("Login");
        },
        gotoModule(module, frame, frameCallback) {
            this.waitForText("Admin", common.defaultTimeout, ".banner");
            this.waitForElement(module, common.defaultTimeout);
            this.click(module);
            if (frame) {
                this.waitForElement(frame, common.defaultTimeout);
                // this.wait(common.queryTimeout);
                within({frame: frame}, frameCallback);
            }
        },
        searchGrid(keyword, input, button) {
            this.seeElement(input, common.defaultTimeout);
            this.fillField(input, keyword);
            this.click(button);
        }
    });
};
