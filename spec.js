function waitForPage(searchUrl) {
        var deferred = protractor.promise.defer();

        browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return ((url.indexOf('auth=') === -1) && (url.indexOf(searchUrl) > -1));
            });
        }, 60000).then(function() {
            browser.driver.sleep(5000).then(function() {
                deferred.fulfill();
            });
        });

        return deferred.promise;
    }

describe('Enter Login Details', function() {
 it('should login to CXone', function(testDone) {
 browser.get('https://auth.dev.nice-incontact.com/login/#/');
  element(by.id('emailFieldNext')).sendKeys('perm_tmsandbox@mailinator.com').then(function () {
                element(by.id('nextBtn')).click().then(function () {
                    element(by.id('mfaPassField')).sendKeys('Qq123456').then(function () {
                        element(by.id('mfaLoginBtn')).click().then(function () {
							 // wait until the landing page is loaded - not login/#
							browser.driver.sleep(5000).then(function() {
							expect(browser.getCurrentUrl()).toEqual('https://na1.dev.nice-incontact.com/tm/#/tenants');
							testDone();
						});
                    });
                });
            });
        });
	});
});
