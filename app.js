

const partialScore = [];  
let insertedNumber = "";
let insertedOperator = "";

const numbers = [...document.querySelectorAll(".number")];
const operators = [...document.querySelectorAll(".operator")];
const scoreDisplay = document.querySelector(".score")


numbers.forEach( number => {
  number.addEventListener("click", ()=> {
    
    insertedNumber += number.textContent;
    // console.log(typeof(insertedN umber));
    scoreDisplay.value = insertedNumber;
    console.log(insertedNumber);
    

  })
})


operators.forEach( operator => {
  operator.addEventListener("click", function() {


    if(operator.textContent == "=") {
      partialScore.push(Number(insertedNumber));
      insertedNumber = "";
      // console.log(score.join(" "));
      
      const finalScore = eval(partialScore.join(""));
      scoreDisplay.value = finalScore;
      // for(let i=0; i<score.length; i++) {
      //   if(score[i]%2!=0) {
          
      //   }
      // }
      partialScore.length = 0;
      console.log(partialScore);
      console.log(finalScore);
      


    } else {
      partialScore.push(Number(insertedNumber));
      insertedNumber = "";
      partialScore.push(operator.textContent);
    }
    
    console.log(partialScore);
  })
})
  
document.querySelector('#test').addEventListener('click', ()=>{
  console.log(scoreDisplay.value)
})



