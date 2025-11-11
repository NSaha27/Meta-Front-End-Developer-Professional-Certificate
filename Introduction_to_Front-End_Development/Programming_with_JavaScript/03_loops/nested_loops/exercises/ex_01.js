/*
  write a program to create a table of numbers from 0 to 5 (each multiplied upto 10)
*/

// for(let i = 0; i <= 5; i++){
//   console.log(`Table of ${i}:`);
//   console.log(`-----------`);
//   for(let j = 0; j <= 10; j++){
//     console.log(`${i} X ${j} = ${(i * j)}`);
//   }
//   console.log();
// }

/*
  exercise - 2
*/

for(let i = 100; i >= 10; i=i-10){
  for(let j = 10; j > 0; j=j-5){
    console.log(`${i} divided by ${j} equals to ${(i / j)}`);
  }
  console.log();
}