module.exports = {
    // Selenium version with download address
    // check for more recent versions of selenium here:
    // https://selenium-release.storage.googleapis.com/index.html
    version: '3.141.0',
    baseURL: 'http://localhost:1786/selenium', // Driver can be configured as needed. For example, you only need chrome to write chrome
    // baseURL: 'https://selenium-release.storage.googleapis.com', // Driver can be configured as needed. For example, you only need chrome to write chrome
    drivers: {
        chrome: {
            // check for more recent versions of chrome driver here:
            // https://chromedriver.storage.googleapis.com/index.html
            version: '2.46',
            arch: process.arch,
            baseURL: 'http://localhost:1786/chromedriver'
            // baseURL: 'https://chromedriver.storage.googleapis.com'
        },
        ie: {
            // check for more recent versions of internet explorer driver here:
            // https://selenium-release.storage.googleapis.com/index.html
            version: '3.141.0',
            arch: process.arch,
            baseURL: 'http://localhost:1786/selenium'
            // baseURL: 'https://selenium-release.storage.googleapis.com'
        }
    }
};
