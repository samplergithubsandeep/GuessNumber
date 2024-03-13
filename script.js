let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
if( guessedNumber > randomNumber){
    gameResult.textContent=" That's to heigh , Try again";
    gameResult.style.backgroundColor="blue";
    
}
else if (guessedNumber < randomNumber){
    gameResult.textContent="Too low , Try again";
    gameResult.style.backgroundColor="yellow";
}
else if(guessedNumber === randomNumber){
    
    gameResult.textContent="Congrats , That's Right";
    gameResult.style.backgroundColor="green";
}
else {
    gameResult.textContent="Please Provide a valid input";
    gameResult.style.backgroundColor="red";
}
 
}
