/*
  EXTRACTING PART OF A STRING OR MODIFYING PART OF A STRING
  ----------------------------------------

  String.trim() - removes the leading and trailing white spaces from a string and returns the trimmed string.

  String.slice(startIndex, endIndex) - Extracts part of a string and returns it as a new string without modifying the original string.

  String.split(splitAtThis) - This method splits a string into multiple sub parts at a searching pattern, puts them into an ordered list (array), and returns it.

*/

// String.trim()
const username1 = " NILADRISAHA ";
const name1 = " Niladri Saha";

console.log(`Trimmed data:
Username: ${username1.trim()}
Name: ${name1.trim()}  
`);

// String.slice()
const str2 = "This is Indian Millitary Academy, one of the finest military academies in the world.";

let partOfStr2 = str2.slice(8, 32);
console.log(partOfStr2);
partOfStr2 = str2.slice(-6, -1);
console.log(partOfStr2);
const hardCopyStr2 = str2.slice();
console.log(hardCopyStr2);

// String.split()
const str4 = "This is Indian Millitary Academy, one of the finest military academies in the world, it has delivered India so many brave, Lion-hearted soldiers, we Indians proud of our IMA.";

const splitStr4ByComma = str4.split(", ", 3);
console.log(splitStr4ByComma);