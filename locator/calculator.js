const CalculatorPage = function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var buttonGo = element(by.id('gobutton'));
    var result = element(by.binding('latest'))

     this.enterFirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo);
     }
     this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
     }
     this.buttonGo = function(){
        buttonGo.click();
     }
     this.verifyResult = function(result){
      let output =  element(by.cssContainingText('.ng-binding', result));
      expect(output.getText()).toEqual(result);
       
  }
};
module.exports = new CalculatorPage;
