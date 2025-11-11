/*
  Write a program that will display a "Happy New Year" countdown
*/

// for(let i = 10; i > 0; i--){
//   console.log(i);
// }
// console.log("Happy New Year!");

/*
  write a program that will print all the even and odd numbers between 100 and 500 seperately
*/

// let evens = [];
// let odds = [];
// for(let i = 100; i <= 500; i++){
//   if(i % 2 === 0){
//     evens.push(i);
//   }else{
//     odds.push(i);
//   }
// }
// console.log("All the even numbers between 100 and 500 are -", evens.join(", "));
// console.log();
// console.log("All the odd numbers between 100 and 500 are -", odds.join(", "));
// console.log();

/*
  write a program that will print all the prime numbers between 100 and 300
*/

// const primes = [];
// for(let i = 100; i <= 300; i++){
//   let isPrime = true;
//   for(let j = 2; j < i; j++){
//     if(i % j === 0){
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime){
//     primes.push(i);
//   }
// }
// console.log("Prime numbers between 100 and 300 are -", primes.join(", "));

/*
  find the sum of the GP of a sequence, where the first term is 5, the common ratio is 3, and the number of terms is 8
*/

let GP = 0;
const firstTerm = 5;
const commonRatio = 3;
for(let n = 0; n < 8; n++){
  const term = firstTerm * (commonRatio ** n);
  GP += term;
}

console.log("sum of the GP of the sequence is - ", GP);

