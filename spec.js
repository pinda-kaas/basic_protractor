describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add 1 and 2', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element( by.binding('latest')).getText()).toEqual('3');
    })
});