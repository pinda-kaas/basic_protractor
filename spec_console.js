describe('Protractor Demo App', function () {

    afterEach(function () {
        browser.manage().logs().get('browser').then(
            function (browserLog) {
            console.log('\n log: ' + require('util').inspect(browserLog));
        });
    });

    it('should show logs', function () {
        browser.get('http://localhost:63342/protractor_stuff/index.html');
    });


});