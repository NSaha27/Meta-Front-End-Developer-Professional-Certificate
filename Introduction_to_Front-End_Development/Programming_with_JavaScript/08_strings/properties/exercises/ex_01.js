/*
  STRING PROPERTIES
  ------------------

  String.length - returns the number of characters in a string.

*/

const usernames = ["NILADRISAHA", "AMITDIVAKARSHAH", "UMESHRATHOR"];

const selectedUsernames = usernames.filter(username => username.length < 15);

console.log("we have selected the following users:", selectedUsernames.toString());