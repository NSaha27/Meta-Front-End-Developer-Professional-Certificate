/*
  SEARCHING CHARACTERS IN A STRING
  --------------------------------

  String.charAt() - returns the character at a particular index of a string.

  String.at() - same as charAt but can accept negetive integers as parameter.

  String.indexOf() - returns the index of the first position that matches a character. If no match is found, it returns -1.

  String.lastIndexOf() - returns the index of the last position that matches a character. If no match is found, it returns -1.

  String.startsWith() - returns true if a string starts with a particular characters or a group of characters, otherwise, returns false.

  String.endsWith() - returns true if a string ends with a particular character or a group of characters, otherwise, returns false.

  String.includes() - returns true if a character or group of characters is present in a string, otherwise returns false.
*/

// String.charAt()
const myName = "Niladri Saha";

// console.log(`character at index 3: ${myName.charAt(3)}`);

const sent = "This is a sentence";
// console.log(sent.charAt((sent.length - 1)) === "." ? "the sentence ends correctly" : "incorrect end of the sentence, please add a full stop (.) at the end");

// String.at()
// considering myName variable
// console.log(`character at index 8: ${myName.at(8)}`);
// console.log(`character at index -7: ${myName.at(-7)}`);
// console.log(`character at index -3: ${myName.at(-3)}`);

// String.indexOf(searchString, startingIndex)
const str1 = "Life is a beautiful story, write it";
console.log(`The word "story" was found at the position: ${(str1.toLowerCase().indexOf("story")) + 1}`);
console.log(str1.toLowerCase().indexOf("life", 6));

// String.lastIndexOf(searchString, startingIndexFromEnd)
const str3 = "People do what they hate for money and use the money to do what they love.";
console.log(`The word "money" is at the position ${(str3.lastIndexOf("money") + 1)} from the end, in the above string`);

console.log(`The word "money" is at the position ${(str3.lastIndexOf("money", 43) + 1)} from the end, in the above string, when starting from the index 43`);


// String.startsWith()
const prodPrice = "$200";
console.log(!(prodPrice.startsWith("$") || prodPrice.startsWith("Rs")) ? "invalid product price" : `The cost of the product is ${prodPrice}`);

// String.endsWith()
const str = "To be, or not to be, that is the question.";

console.log(`Does the sentence ends with "question"?: ${str.endsWith("question") ? "yes" : "no"}`);
console.log(`Does the sentence ends with "question."?: ${str.endsWith("question.") ? "yes" : "no"}`);

// String.includes()
const str2 = "Supreme court has given advice to the AIFF to provide finance gurantee to sponsors, attract more advertisements to collect fund and future proof the ISL league";

console.log(`Does the word "AIFF" exist in the above sentence? : ${str2.includes("AIFF") ? "yes" : "no"}`);

console.log(`Does the word "isl" present in the above sentence? : ${str2.includes("isl") ? "yes" : "no"}`); // result will be "no" as there is no such word present there

// however, this will return "yes"
console.log(`Does the word "isl" present in the updated sentence? : ${str2.toLowerCase().includes("isl") ? "yes" : "no"}`);


