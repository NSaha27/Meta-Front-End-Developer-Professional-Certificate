/*
  -----------------------------------------
  EXTRACTING AND ADDING A GROUP OF ELEMENTS FROM AND TO AN ARRAY
  -----------------------------------------

  Array.slice(extract from, extract upto) - Extracts part of an array and returns it.
  
  Array.splice(extract from, no. of extraction, replace with (optional)) - Extracts part of an array and returns it, and often replaces the extracted part with one or more elements.

*/

const employees = [
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

// Array.slice()

// extract a selected part where end is known
const selectedEmployees1 = employees.slice(1, 4);

// console.log("The following employees were chosen for this project:");
// const selectedEmpNames = selectedEmployees1.map(emp => emp.name);
// console.log(selectedEmpNames.toString());

// extract a selected part where end is unknown
const selectedEmployees2 = employees.slice(3);

// console.log(selectedEmployees2);

// Array.splice()

// const firedEmployees = employees.splice(0, 2);

// console.log(firedEmployees);
// console.log(employees);

const employeesReplaced1 = employees.splice(0, 2,
  {
    ssn: "794805231775",
    name: "Ritesh Ghosh",
    phone: "+919831625100"
  },
  {
    ssn: "584936012867",
    name: "Indrani Basak",
    phone: "+919163875432"
  }
);

console.log(employeesReplaced1);
console.log(employees);
