describe('Protractor stuff', function () {
    it('should hit events page', function () {
        browser.get('http://localhost:9000/#/events/nrma');

        element(by.cssContainingText('option', 'Hail')).click();
        element(by.model('claim.incidentDate')).sendKeys(1);
    });
});

