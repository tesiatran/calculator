$(document).ready(initializeApp);

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var displayInputs;
var calculationResult = null;

function initializeApp(){
   applyClickHandlers();
}

function applyClickHandlers(){
   $("#number-block").on("click", ".number", numberButtonHandler);
   $("#operator-column").on("click", ".operator", operatorButtonHandler);
   $("#equals").on("click", equalsButtonHandler);
}

function numberButtonHandler(event){
   // console.log(event);

   var inputtedNumber = "";
   inputtedNumber = $(event.currentTarget).find("p").text();
   // console.log(inputtedNumber);

   stringNumberToPush = stringNumberToPush + inputtedNumber;
   // console.log(stringNumberToPush);

   displayArray.push(inputtedNumber);
   // console.log(displayArray);

   updateDisplay();
}

function operatorButtonHandler(event){
   // console.log(event);

   var inputtedOperator = "";
   inputtedOperator = $(event.currentTarget).find("p").text();
   // console.log(inputtedOperator);

   displayArray.push(inputtedOperator);
   // console.log(displayArray);

   updateDisplay();

   calculationArray.push(stringNumberToPush);
   // console.log(calculationArray);

   calculationArray.push(inputtedOperator);
   // console.log(calculationArray);

   stringNumberToPush = "";
}

function equalsButtonHandler(event){
   // console.log(event);

   calculationArray.push(stringNumberToPush);

   stringNumberToPush = "";
   displayArray = [];
   // console.log(calculationArray);

   var answer = calculate(calculationArray[0], calculationArray[2], calculationArray[1]);
   // console.log(answer);

   displayArray.push(answer);
   
   updateDisplay();
}

function updateDisplay(){
   var displayText = displayArray.join("");
   // console.log(displayText);

   $("#display-text").text(displayText);
}

function calculate(num1, num2, operator){
   var number1 = parseFloat(num1);
   var number2 = parseFloat(num2);
   // console.log(number1);
   // console.log(number2);

   var result = null;

   switch(operator){
      case "+":
         result = number1 + number2;
         break;
      case "-":
         result = number1 - number2;
         break;
      case "*":
         result = number1 * number2;
         break;
      case "/":
         result = number1 / number2;
   }
   return result;
}
