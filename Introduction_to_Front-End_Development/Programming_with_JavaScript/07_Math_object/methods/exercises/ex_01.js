/*
  Math.ceil() - round up a decimal value to the nearest integer

  Math.floor() - round down a decimal value to the nearest integer

  Math.round() - round up a decimal value to the nearest integer if the decimal value starts with .5 or more, or round down a decimal value to the nearest integer if the decimal value starts with a number less than .5.

  Math.trunc() - removes the decimal part and returns only the integer part of a decimal number.

  Math.pow(number, power) - returns the result of a number raised to a specific power.
  
  Math.sqrt() - returns the square root of a number.

  Math.cbrt() - returns the cube root of a number.

  Math.abs() - returns the absolute value of a number.

*/

const decmVal = 15.385;
const decmVal2 = 12.725;

const ceiledVal = Math.ceil(decmVal);
const ceiledVal2 = Math.ceil(decmVal2);
console.log("ceil:", ceiledVal, ceiledVal2);

const flooredVal = Math.floor(decmVal);
const flooredVal2 = Math.floor(decmVal2);
console.log("floor:", flooredVal, flooredVal2);

const roundedVal = Math.round(decmVal);
const roundedVal2 = Math.round(decmVal2);
console.log("round:", roundedVal, roundedVal2);

const truncatedVal = Math.trunc(decmVal);
const truncatedVal2 = Math.trunc(decmVal2);
console.log("trunc:", truncatedVal, truncatedVal2);

console.log("3 raised to the power 4:", Math.pow(3, 4));
console.log("square root of 64:", Math.sqrt(64));
console.log("cube root of 729:", Math.cbrt(729));
console.log("absolute value of -18:", Math.abs(-18));