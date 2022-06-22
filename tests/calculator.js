const { before } = require('lodash');
let CalculatorPage = require('../locator/calculator');

describe('calculator tests', function () {

    beforeEach(function() {
        browser.get(browser.baseUrl);

    });

    it('addition test', function () {
        CalculatorPage.enterFirstNumber('4');
        CalculatorPage.enterSecondNumber('3');
        CalculatorPage.buttonGo();
        CalculatorPage.verifyResult('7');

    });

    it('subtraction test', function () {
        CalculatorPage.enterFirstNumber('4');
        CalculatorPage.enterSecondNumber('3');
        CalculatorPage.buttonGo();
        CalculatorPage.verifyResult('5');
    }); 
});