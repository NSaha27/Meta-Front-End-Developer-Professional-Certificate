/*
  Set is a collection of unique values.
  To eliminate repetitive values from an array, we can create an instance of a set from the set constructor, and pass the array as its parameter. The set will return a list of unique elements out of that array.
*/

const userEmails = [
  "jiban.das25@example.com", "abhijit.saha30@example.com","koushik.ghosh32@example.com","jiban.das25@example.com","ritwick.hazra07@example.com","koushik.ghosh32@example.com","abinash.palodhi72@example.com","arnab.roy24@example.com","jiban.das25@example.com","koushik.ghosh32@example.com","siddhartha.chawdhury47@example.com","abinash.palodhi72@example.com"
];

const uniqueUserEmails = new Set(userEmails);

console.log(uniqueUserEmails);

console.log();

const users = ["Jiban Das", "Koushik Ghosh", "Anirban Bhattacharya", "Abinash Palodhi", "Arnab Roy", "Koushik Ghosh", "Jiban Das", "Siddhartha Chawdhury", "Abinash Palodhi", "Ritwick Hazra", "Arnab Roy", "Anirban Bhattacharjee"];
const uniqueUsers = new Set(users);
console.log(uniqueUsers);