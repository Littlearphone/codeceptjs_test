exports.config = {
    tests: './tests/*_test.js',
    output: './output',
    helpers: {
        // Puppeteer: {
        //     url: 'http://localhost',
        //     show: true
        // },
        WebDriver: {
            host: "localhost",
            url: "http://localhost",
            smartWait: 5000,
            show: true,
            restart: false,
            windowSize: "maximize",
            timeouts: {
                "script": 60000,
                "page load": 10000
            },
            browser: "internet explorer",
            desiredCapabilities: {
                "ieOptions": {
                    "ie.browserCommandLineSwitches": "-private",
                    "ie.usePerProcessProxy": true,
                    "ie.ensureCleanSession": false
                }
            }
        },
        conditional: {
            require: './helpers/conditional_helper.js'
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
