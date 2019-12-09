
const score = [];

const numbers = [...document.querySelectorAll(".number")];




numbers.forEach( number => {
  number.addEventListener("click", function() {
    
    score.push(this.textContent);
    console.log(score);
  })
})
  

  

