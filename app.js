
const score = [];

const numbers = [...document.querySelectorAll(".number")];
const operators = [...document.querySelectorAll(".operator")];
const scoreDisplay = document.querySelector(".score")


numbers.forEach( number => {
  number.addEventListener("click", ()=> {
    
    score.push(Number(number.textContent));
    console.log(score);
    scoreDisplay.value = score;
    console.log(scoreDisplay);
  })
})


operators.forEach( operator => {
  operator.addEventListener("click", function() {
      
    score.push(operator.textContent);
    console.log(score);
  })
})
  
document.querySelector('#test').addEventListener('click', ()=>{
  console.log(scoreDisplay.value)
})
