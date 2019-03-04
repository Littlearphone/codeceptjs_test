Feature('search');
Scenario('test search bing', (I) => {
    I.amOnPage("https://cn.bing.com");
    I.seeElement("#est_en");
    I.click("#est_en");
    I.seeElement("#sb_form_q");
    I.fillField("#sb_form_q", "codeceptjs");
    I.waitForElement("//div[@id='sw_as']//li[@class='sa_sg']", 5);
    I.click("#sb_form_go");
    I.waitForElement("#b_results", 5);
    I.click("//div[@id='b_content']//a[@href='https://codecept.io/quickstart/']");
    I.waitForInvisible("#b_results", 5);
    I.seeInTitle("Quickstart");
});
