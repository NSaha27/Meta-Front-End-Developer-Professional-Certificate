/*
  Math.random() - returns a decimal number between 0 and 0.99.

  NOTE - (i) We can multiply it by 10 to get a number between 1 and 10, (ii) we must save this value to a variable to use the same value further.

*/

const randDecNumBtw1And10 = Math.random() * 10;

console.log("The random decimal number between 1 and 10 is:", randDecNumBtw1And10);

const randIntNumBtw1And100 = Math.ceil(Math.random() * 100);
console.log("The random integer number between 1 and 100 is:", randIntNumBtw1And100);

/* 
  write a program that will return a random number between 1 and 10. The number will be invisible. Your task is to guess that number. You will get 3 chances to guess it. If you guess it correctly within that 3 chances, you will win the game, otherwise, you will lose it.
*/


function startTheGame(){
  const gameRandNum = Math.ceil(Math.random() * 10);
  let isMatched = false;
  let attempt;
  for(let i = 1; i <= 3; i++){
    let chosenNum = Number(prompt("--- Guess my number game ---\nEnter your number:"));
    if(!isNaN(chosenNum)){
      if(gameRandNum === chosenNum){
        isMatched = true;
        attempt = i;
        alert("Hooray! you win 💐");
        break;
      }else{
        const diff = Math.abs(gameRandNum - chosenNum);
        alert("bad choice 😒");
        if(diff > 2){
          alert("you are far away from actual number!");
        }else {
          alert("you're very close to the actual number!");
        }
        alert(`you left ${(3 - i)} more chance(s)!`);
      }
    }else{
      alert("enter a valid integer!");
      startTheGame();
    }
  }
  isMatched ? alert(`you won the game in ${attempt} attempt(s)`) : alert("better luck next time!");
}