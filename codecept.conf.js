/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/
const common = require("./tests/data/000_common.js");
const webDriver = {
    "chrome": {
        browser: "chrome",
        desiredCapabilities: {
            "chromeOptions": {
                "args": [
                    // "--headless",
                    "--disable-gpu"
                ]
            }
        }
    },
    "ie": {
        browser: "internet explorer",
        desiredCapabilities: {
            "ieOptions": {
                "ie.browserCommandLineSwitches": "-private",
                "ie.usePerProcessProxy": true,
                "ie.ensureCleanSession": false
            }
        }
    }
};
exports.config = {
    tests: './tests/modules/**/*_test.js',
    output: './output',
    helpers: {
        // Nightmare: {
        //     url: "http://localhost",
        //     windowSize: "1920x1024",
        //     show: true,
        //     restart: false
        // },
        // Puppeteer: {
        //     url: 'http://localhost',
        //     windowSize: "1920x1024",
        //     timeouts: {
        //         "script": 10000,
        //         "page load": 10000
        //     },
        //     show: true
        // },
        WebDriver: Object.assign({
            host: "localhost",
            url: "http://localhost",
            smartWait: 5000,
            show: true,
            restart: false,
            windowSize: "maximize",
            timeouts: {
                "script": 10000,
                "page load": 10000
            },
            keepCookies: true  // keep cookies for all tests
        }, webDriver.chrome),
        conditional: {
            require: './helpers/conditional_helper.js'
        },
        jsFailure: {
            require: './helpers/js_failure_helper.js'
        },
        jsWait: {
            require: './helpers/js_wait_helper.js'
        }
    },
    plugins: {
        autoLogin: {
            enabled: true,
            saveToFile: false,
            inject: 'login',
            users: {
                admin: {
                    login: (I) => I.loginAdmin(),
                    check: (I) => I.waitForText("Admin", common.defaultTimeout, ".banner"),
                    restore: (I) => I.amOnPage(common.baseUrl)
                }
            }
        },
        autoDelay: {
            "enabled": true
        },
        retryFailedStep: {
            "enabled": true
        }
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: "./config/selenium-standalone-start.js",
    teardown: "./config/selenium-standalone-stop.js",
    mocha: {},
    name: 'codecept-test'
};
