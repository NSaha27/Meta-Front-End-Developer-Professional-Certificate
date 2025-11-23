/*
  MATCHING OR SEARCHING A REGEX PATTERN IN A STRING
  ------------------------------------------

  String.match(regexp) - This method of string retrieves the result of matching a string against a regular expression. This method returns an array of the matched characters. If no match is found, it returns null.

  String.search(regexp) - This method searches a string for a regular expression and returns the index where the first match was found.

  String.test(regexp) - This method searches for a match between a regular expression and a string. If there is any match found, it returns true, otherwise it returns false.

  RegExp.exec(string) - This method performs a search with a regular expression for a match in a specified string and returns the results of matching in an array or returns null.

  String.replace(searchChar, modifyWith) - replaces a part of a string with another string and returns the new string.

*/

// String.match()
const str1 = "This is Indian Millitary Academy, one of the finest military academies in the world, from where India gets her bravest soldiers";
const regex1 = /[A-Z]/g;
// console.log(str1.match(regex1));

// a username must not have any special symbol, so check it
const username1 = "#ARNAB@ROY-98";
const username2 = "ARNABROY98";
const checkingRegex = /[~`!@#$%^&*()_\-+={}\[\]\\|.,;:'"?<>]/g;
console.log(username1.match(checkingRegex) ? "invalid username 1!" : "username 1 is ok!");
console.log(username2.match(checkingRegex) ? "invalid username 2!" : "username 2 is ok!");

// String.search()
const str2 = "LCA Tejas is an advanced, multirole, combat tested fighter jet, but Alash! it is in the news for being crashed two times in just past 4 months";

// find the index of the character first found in the string, which is not a word, not a white space, not a comma, or appostrophy
const regex2 = /[^\w\s,']/g;
console.log(str2.search(regex2));
console.log(str2[str2.search(regex2)]);

// String.test()
// trying to find a match between a regexp and the usernames above
const regex3 = /^[A-Z0-9]+$/g;

console.log(regex3.test(username1) ? "match found in username 1!" : "match not found in username 1!");

console.log(regex3.test(username2) ? "match found in username 2!" : "match not found in username 2!");

// validate email ids
const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const email1 = "saha_niladri.com";
const email2 = "saha@.com";
const email3 = "saha@domain";
const email4 = "saha.niladri@example.com";

console.log("Is email 1 valid? :", regexForEmail.test(email1) ? "yes" : "no");
console.log("Is email 2 valid? :", regexForEmail.test(email2) ? "yes" : "no");
console.log("Is email 3 valid? :", regexForEmail.test(email3) ? "yes" : "no");
console.log("is email 4 valid? :", regexForEmail.test(email4) ? "yes" : "no");
console.log();

// RegExp.exec(string)
const regexpForMobileNum = /^(\+\d{1,3})?\d{10}$/;

const contactNum1 = "+917947825"; // has only 9 digits
const contactNum2 = "+91842O5I0764"; // has alphabets
const contactNum3 = "+918420520799"; // correct mobile number

console.log("Is the first contact number valid? :", regexpForMobileNum.exec(contactNum1) ? "yes" : "no");
console.log(regexpForMobileNum.exec(contactNum1));

console.log("Is the second contact number valid? :", regexpForMobileNum.exec(contactNum2) ? "yes" : "no");
console.log(regexpForMobileNum.exec(contactNum2));

console.log("Is the third contact number valid? :", regexpForMobileNum.exec(contactNum3) ? "yes" : "no");
console.log(regexpForMobileNum.exec(contactNum3));

// String.replace()
const str3 = "Mr. Narendra Modi, the PM of Australia has recently visited to South Africa to join the G20 Summit";

const replacedStr3 = str3.replace("Australia", "India");
console.log(replacedStr3);

const replace2Str3 = str3.replace(/[A-Z]{1}[0-9]+/, "Global 20 (G20)");
console.log(replace2Str3);
