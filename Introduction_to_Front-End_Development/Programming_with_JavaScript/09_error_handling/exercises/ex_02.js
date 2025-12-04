/*
  THROWING AN ERROR
  -----------------
*/

try {
  throw new TypeError("num1 is not defined");
} catch(err){
  console.error(err);
  console.error("a reference error was thrown manually!");
}
console.log("rest of the code...");