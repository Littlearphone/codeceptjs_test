::Pre-Clean
call source _clean-up.cmd
::Create default Node.js project
call npm init -y
::Install selenium server & download browser driver for selenium
call npm install --save-dev selenium-standalone && node ./config/selenium-drivers-install.js
::Install codeceptjs (& puppeteer)
::npm install --save-dev codeceptjs puppeteer
call npm install --save codeceptjs webdriverio
::exit
