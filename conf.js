exports.config = {
  framework: 'jasmine2',
  seleniumServerJar: 'selenium-server-standalone-2.47.1.jar',
  chromeDriver: 'chromedriver.exe',
  specs: ['spec_console.js'],
  capabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path
  }

}