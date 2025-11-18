/*
  ----------------------------------
  ADDING AND REMOVING ARRAY ELEMENTS
  ----------------------------------

  Array.push(elem or list of elems) - Adds one or more elements to the end of an array and returns the new length of the array.

  Array.pop() - Removes an element from the end of an array and returns it.

  Array.unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.

  Array.shift() - Removes an element from the beginning of an array and returns it.

*/

// Array.push()
const customers = [
  {
    ssn: "452582493117",
    name: "Amit Das",
    phone: "+918420729384"
  },
  {
    ssn: "874701253681",
    name: "Ganesh Yadav",
    phone: "+917947825699"
  },
  {
    ssn: "825593604572",
    name: "Abhijit Chowdhary",
    phone: "+919830470285"
  },
  {
    ssn: "784952226840",
    name: "Subhankar Das",
    phone: "+918240520363"
  },
  {
    ssn: "102583147956",
    name: "Aabir Ghosh",
    phone: "+917947601401"
  }
];

const newCustomer1 = {
  ssn: "624587901034",
  name: "Anirban Banerjee",
  phone: "+918420531642"
};

const newCustomer2 = {
  ssn: "804251169735",
  name: "Palash Kar",
  phone: "+916231925481"
};

// console.log(customers);
// console.log("Previous length of the customer array:", customers.length);
// console.log();

// after adding two more customers at the end
let newNoOfCusts = customers.push(newCustomer1, newCustomer2);

// console.log(customers);
// console.log("New length of the customer array:", newNoOfCusts);

// Array.pop()
const removedCustomer1 = customers.pop();
const removedCustomer2 = customers.pop();

// console.log(customers);
// console.log(removedCustomer1);
// console.log(removedCustomer2);

const newCustomer3 = {
  ssn: "742782449660",
  name: "Rupam Majhi",
  phone: "+916297425833"
};
const newCustomer4 = {
  ssn: "980375106229",
  name: "Akash Jana",
  phone: "+918420593284"
};

newNoOfCusts = customers.unshift(newCustomer3, newCustomer4);

// console.log(customers);
// console.log("New length of the customer array:", newNoOfCusts);

// Array.shift()
const removedCustomer3 = customers.shift();
const removedCustomer4 = customers.shift();

// console.log(customers);
// console.log(removedCustomer3);
// console.log(removedCustomer4);

