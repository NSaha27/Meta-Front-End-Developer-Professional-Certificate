/*
  SPREAD OPERATOR
  ---------------
  - Expands an array, or object, or a string into multiple elements
  - Used for concatenation, to create a shallow copy, or for passing arguments

  REST OPERATOR
  -------------
  - Gathers multiple elements to an array or to an object
  - Used for destructuring or collecting function arguments
*/

// --- Spread Operator ---

// to create a shallow copy
const oldEmployees = [
  "Jiban Das",
  "Koushik Ghosh",
  "Anirban Bhattacharya",
  "Abinash Palodhi",
  "Arnab Roy",
  "Siddhartha Chawdhury",
  "Ritwick Hazra",
  "Bhaskar Basak",
];

const existingEmployees = [...oldEmployees];

// console.log(existingEmployees);

// to concat into a single array or object
const newEmployees = ["Kunal Sarkar", "Ritam Nath", "Sushil Upadhyay", "Tarun Biswas"];

const updatedEmployeeList = [...oldEmployees, ...newEmployees];

// console.log(updatedEmployeeList);

// add new properties
let product = {
  ID: 1,
  name: "Boat Airdops 138",
  category: "Headphone & Eardops",
  mkd: "sep, 2025",
  MRP: 1799
}

product = {...product, sellingPrice: Math.round(product.MRP * 0.4 * 1.12)};

// console.log(product);

// converting a string to an array using spread operator
const username = "Niladri Saha";
const arrOfChars = [...username];
console.log(arrOfChars);
