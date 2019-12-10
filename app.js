
const partialScore = [];  
let insertedNumber = "";
let insertedOperator = "";

const calculatorKeys = document.querySelector('.calculator-keys')
const numbers = [...document.querySelectorAll(".number")];
const operators = [...document.querySelectorAll(".operator")];
const scoreDisplay = document.querySelector(".score")


numbers.forEach( number => {
  number.addEventListener("click", ()=> {
    insertedNumber += number.textContent;
    scoreDisplay.value = insertedNumber;
  })
})

operators.forEach( operator => {
  operator.addEventListener("click", function() {

    if(operator.textContent == "=") {
      partialScore.push(Number(insertedNumber));
      insertedNumber = "";
      const finalScore = eval(partialScore.join(""));
      scoreDisplay.value = finalScore;
      partialScore.length = 0;
    } else if(operator.textContent == "C") {
      insertedNumber = '';
      insertedOperator = '';
      partialScore.length = 0;
      scoreDisplay.value = "";
      
    } else {
      partialScore.push(Number(insertedNumber));
      insertedNumber = "";
      partialScore.push(operator.textContent);
    }
  })
})
  
calculatorKeys.addEventListener("mouseenter", ()=> {
  calculatorKeys.style.opacity = "1";
  calculatorKeys.style.transform = 'translateY(0)';
})

calculatorKeys.addEventListener("mouseleave", ()=> {
  calculatorKeys.style.opacity = "0";
  calculatorKeys.style.transform = 'translateY(-30px)'
})

document.addEventListener('keypress', function (e) {
  // scoreDisplay.value = '';
  if (e.key === 'Enter') {
    scoreDisplay.value = eval(scoreDisplay.value);
  } 
});