/*
  ----------------------------------
  SEARCHING FOR ELEMENTS OF AN ARRAY
  ----------------------------------

  Array.find(predicate) - returns the first element of the array that satisfies the predicate, otherwise returns undefined (if not found).

  Array.findIndex(predicate) - returns the index of the first element that satisfies the predicate, otherwise returns -1 (if not found).

  Array.indexOf() - find the index of a premitive value (first premitive value) in an array. If not found, it returns -1.

  Array.lastIndexOf() - finds the index of a premitive value in an array, but searches it from the end and returns the first value it finds. If not found, it returns -1.

  NOTE - In case of object premitive, both indexOf() and lastIndexOf() tries to match the exact reference of the object, otherwise it returns -1.

  Array.includes() - returns true or false based on a premitive's existence in an array.

  Array.some() - returns a boolean value (true or false) if atleast some of the premitives satisfies the condition written in the callback function passed in it.

  Array.every() - returns a boolean value if all the premitives satisfies the condition written in the callback function passed in it.

*/

const favouriteNumbers = [2, 5, 8, 11, 13, 20, 8, 31, 11, 38, 17, 13];
const favouriteNumbers2 = [4, 6, 8, 15];
const products = [
  {name: "Laptop", price: 600, inStock: true},
  {name: "Mobile", price: 200, inStock: true},
  {name: "Tablet", price: 400, inStock: false},
  {name: "Monitor", price: 150, inStock: true},
  {name: "Desktop", price: 700, inStock: false},
  {name: "Refridgerator", price: 300, inStock: false}
];

// Array.find()
const firstProdGT300 = products.find(prod => prod.price > 300);
// console.log(firstProdGT300);

const firstProdGT1000 = products.find(prod => prod.price > 1000);
// console.log(firstProdGT1000 ? firstProdGT1000 : "no product above Rs.1000/- is available.");

const firstProdNotInStock = products.find(prod => !prod.inStock);
// console.log(firstProdNotInStock ? `${firstProdNotInStock.name} is not in stock.` : "all products are in stock");

// Array.findIndex()
const indxFirstProdEq200 = products.findIndex(prod => prod.price === 200);
// console.log(indxFirstProdEq200 !== -1 ? "product was found" : "no such product was found");

const indxFirstFavOddNum = favouriteNumbers.findIndex(num => num % 2 !== 0);
// console.log(indxFirstFavOddNum !== -1 ? `we found the first odd number at position ${(indxFirstFavOddNum + 1)}` : `there was no odd number we found`);

// Array.indexOf()
const indxFavFirstEvenNum = favouriteNumbers.indexOf(8);
// console.log(`The number is at the position ${(indxFavFirstEvenNum + 1)}, when counting starts from the beginning`);

const indxFavEvenNum = favouriteNumbers.indexOf(8, 3);
// console.log(`The number is at the position ${(indxFavEvenNum + 1)}, when counting starts from the 3rd index`);

// Array.lastIndexOf()
const indxFavLastOddNum = favouriteNumbers.lastIndexOf(11);
// console.log(`The number is at the position ${(indxFavLastOddNum + 1)}, when counting starts from the end`);

const indxFavOddNum = favouriteNumbers.lastIndexOf(11, 7);
// console.log(`The number is at the position ${(indxFavOddNum + 1)}, when counting starts from the end at index 7`);

// Array.includes()
const is11Present = favouriteNumbers.includes(11);
// console.log(is11Present);

// as the same reference is not given, though the object is same, it will return false.
const isMonitorPresent = products.includes({name: "Monitor", price: 150, inStock: true});
// console.log(isMonitorPresent);

// Array.some()
// check whether atleast some of products has a price higher than 500 or not?
const ifSomeProdHighThan500 = products.some(prod => prod.price > 500);
// console.log(ifSomeProdHighThan500);

// check whether atleast some of my favourite numbers are prime or not
const areSomeFavNumsPrime = favouriteNumbers.some(favNum => {
  let isPrime = true;
  for(let i = 2; i < favNum; i++){
    if(favNum % i === 0){
      isPrime = false;
      break;
    }
  }
  return isPrime;
});
// console.log(areSomeFavNumsPrime);

// Array.every()
const areAllProdsAbove1000 = products.every(prod => prod.price > 1000);
console.log(areAllProdsAbove1000); // false

const areAllProdsAbove100 = products.every(prod => prod.price > 100);
console.log(areAllProdsAbove100); // true

const areAllFavNumsEven = favouriteNumbers.every(favNum => favNum % 2 === 0);
console.log(areAllFavNumsEven); // false
