// Step definitions

var search = require('../pages/searchPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	browser.ignoreSynchronization = true

	When(/^I search for Item (.*)$/, function (name, done){
		browser.wait(EC.visibilityOf(search.searchBox), 100000);
		search.searchBox.sendKeys(name);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		done();
	});
	
	When('I select a filter', function (done){
		search.filterGenre.click();
		search.selectFilter.click();
	  });
});
