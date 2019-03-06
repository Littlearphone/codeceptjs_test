/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/

Feature('search');
Scenario('test search bing', (I) => {
    I.amOnPage("https://cn.bing.com");
    I.seeElement("#est_en");
    I.click("#est_en");
    I.seeElement("#sb_form_q");
    I.fillField("#sb_form_q", String(Math.random()));
    I.click("#sb_form_go");
    I.waitForElement("#b_results", 5);
    I.fillField("#sb_form_q", "codeceptjs");
    I.click("#sb_form_go");
    I.waitForElement("#b_results", 5);
    I.click("//div[@id='b_content']//a[@href='https://codecept.io/quickstart/']");
    I.see("Quickstart", "h1");
});
