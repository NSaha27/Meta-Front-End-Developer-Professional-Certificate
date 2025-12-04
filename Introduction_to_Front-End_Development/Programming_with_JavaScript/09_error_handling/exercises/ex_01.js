/*
  CATCHING ERROR OBJECT
  ---------------------
*/
try {
  let num2 = 12;
  console.log(num1 + num2);
}catch(err) {
  console.error(err);
  console.error("a reference error was thrown!");
}
console.log("code is still running even after throwing an error!");