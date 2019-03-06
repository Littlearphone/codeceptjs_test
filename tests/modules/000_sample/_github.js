/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/

Feature('search');
Scenario('test search github', (I) => {
    I.amOnPage("https://github.com");
    I.see("Why GitHub", "//summary");
    I.fillField("Search GitHub", "codeceptjs");
    I.pressKey("Enter");
    I.waitForText("repository results", 5);
    I.click("Codeception/CodeceptJS");
    I.see("Modern Era Acceptance Testing Framework for NodeJS");
});
