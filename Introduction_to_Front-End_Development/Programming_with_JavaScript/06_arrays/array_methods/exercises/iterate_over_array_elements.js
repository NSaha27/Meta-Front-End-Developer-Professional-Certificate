/*
  Array.forEach( function(elm, indx, arr){} ) - Iterates over each element of an array and runs a function that will work on each of them. The function takes three arguments. The first argument is one of the array elements, the second argument is the index position of that element, it is optional, and the third argument is the array itself, it is also optional.

  Array.filter( function(elm){} ) - It filters the array based on a specific test. It takes a function that performs the test for each of the array elements. Those array elements that pass the test are returned. This array method returns an array of the test passed elements. 

  Array.map( function(elm){} ) - It takes a function as an argument and executes it for each of the elements of the array. During the iteration the function performs an operation on each of the array elements and returns another array of modified elements.
*/

const students = [
  {
    roll: 1,
    sec: "A",
    name: "Manas Majhi",
    marks: [92, 98, 91, 95, 88],
  },
  {
    roll: 2,
    sec: "A",
    name: "Abhijit Bhattacharya",
    marks: [90, 93, 88, 96, 90],
  },
  {
    roll: 3,
    sec: "A",
    name: "Hitesh Dasgupta",
    marks: [90, 91, 85, 82, 83],
  },
  {
    roll: 1,
    sec: "B",
    name: "Tanmay Ghosh",
    marks: [94, 97, 90, 97, 91],
  },
  {
    roll: 2,
    sec: "B",
    name: "Anirban Chakraborty",
    marks: [93, 95, 88, 94, 88],
  },
  {
    roll: 3,
    sec: "B",
    name: "Chaitali Barik",
    marks: [91, 92, 87, 85, 89],
  }
];

// Array.forEach()
const secAstudents = [];
const secBstudents = [];

students.forEach((stu, indx, arr) => {
  switch(stu.sec){
    case "A":
      secAstudents.push(stu);
      break;
    case "B":
      secBstudents.push(stu);
      break;
    default:
      return false;
  }
});

// console.log(secAstudents);
// console.log();
// console.log(secBstudents);

// Array.map()
const newStudentList = students.map(stu => {
  const totMarks = stu.marks.reduce((total, number) => total += number, 0);
  const numOfSubjects = stu.marks.length;
  const average = Math.round(totMarks / numOfSubjects);
  stu = {...stu, avgMarks: average};
  return stu;
});
// console.log(newStudentList);

// Array.filter()
const stusGot90InMin3Sub = students.filter(stu => {
  const noOf90s = stu.marks.filter(mark => mark >= 90).length;
  if(noOf90s >= 3) return stu;
});
console.log(stusGot90InMin3Sub);
