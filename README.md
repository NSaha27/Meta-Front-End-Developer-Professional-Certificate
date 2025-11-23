# Meta-Front-End-Developer-Professional-Certificate
------------------------------------------------------

HTML5 Semantic Tags
------------------------------------------------------


CSS Selectors
------------------------------------------------------

1. Element Selectors
    Element selectors help select HTML elements based on their element type.
    For example, if we select p as a selector, the style will be applied to all the p elements in the webpage.
    ex.
      index.html
      ----------
      1  <h1>This is the main heading</h1>

      style.css
      ---------
      1  h1 {
      2    color: blue; 
      3  }

      Note - this will apply blue color to the text inside of all the h1 elements.

2. ID Selector
    ID selector uses the id attribute of an HTML element to apply styling on it. As an ID is unique for a webpage, it allows the developer to select a specific element to apply styling. ID selector is prefixed with # symbol.
    ex.
      index.html
      ----------
      1  <span id="latest">New element!</span>

      style.css
      ---------
      1  #latest {
      2    background-color: purple;
      3  }

3. Class Selector
    Styling can be applied to the HTML elements using class selectors. One or more elements can have same class name, hence, same styling can be applied to them. Class selector is prefixed with . (period) symbol.
    ex.
      index.html
      ----------
      1  <h2 class="text-blue">This is a heading</h2>
      2  <p class="text-blue">This is a paragraph.</p>

      style.css
      ---------
      1  .text-blue {
      2     color: blue;  
      3  }

4. Element with Class Selector
    It is a more specific selecting method where the element is first selected by tag name, then selected by its class or id name.
    ex.
      index.html
      ----------
      1  <h2 class="text-blue">This is a heading</h2>
      2  <h2 class="text-purple">This is a paragraph.</h2>
      3  <h2 class="text-green">This is a paragraph.</h2>

      style.css
      ---------
      1  h2.text-purple {
      2     color: purple;  
      3  }

CSS styling guide book link
----------------------------
https://read.amazon.com/sample/1449393195?clientId=share


---------------------------------------------
JAVASCRIPT
---------------------------------------------

ARRAY METHODS
--------------

ADDING AND REMOVING ARRAY ELEMENTS
----------------------------------

  Array.push(elem or list of elems) - Adds one or more elements to the end of an array and returns the new length of the array.

  Array.pop() - Removes an element from the end of an array and returns it.

  Array.unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.

  Array.shift() - Removes an element from the beginning of an array and returns it.

EXTRACTING AND ADDING A GROUP OF ELEMENTS FROM AND TO AN ARRAY
-----------------------------------------

  Array.slice(extract from, extract upto) - Extracts part of an array and returns it.
  
  Array.splice(extract from, no. of extraction, replace with (optional)) - Extracts part of an array and returns it, and often replaces the extracted part with one or more elements.

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

USAGE OF MAP, FILTER, AND REDUCE METHODS
-------------------------------------------

  Array.map() - Takes an array and returns a new array of the same size with transformed values.

  Array.filter() - Takes an array and returns a new array with only elements passing a test.

  Array.reduce() - Takes an array and combines all elements into one result (number, object, etc.)

STRING METHODS
---------------

  SEARCHING CHARACTERS IN A STRING
  --------------------------------

  String.charAt() - returns the character at a particular index of a string.

  String.at() - same as charAt but can accept negetive integers as parameter.

  String.indexOf() - returns the index of the first position that matches a character. If no match is found, it returns -1.

  String.lastIndexOf() - returns the index of the last position that matches a character. If no match is found, it returns -1.

  String.startsWith() - returns true if a string starts with a particular characters or a group of characters, otherwise, returns false.

  String.endsWith() - returns true if a string ends with a particular character or a group of characters, otherwise, returns false.

  String.includes() - returns true if a character or group of characters is present in a string, otherwise returns false.

  MATCHING OR SEARCHING A REGEX PATTERN IN A STRING
  ------------------------------------------

  String.match(regexp) - This method of string retrieves the result of matching a string against a regular expression. This method returns an array of the matched characters. If no match is found, it returns null.

  String.search(regexp) - This method searches a string for a regular expression and returns the index where the first match was found.

  String.test(regexp) - This method searches for a match between a regular expression and a string. If there is any match found, it returns true, otherwise it returns false.

  RegExp.exec(string) - This method performs a search with a regular expression for a match in a specified string and returns the results of matching in an array or returns null.

  String.replace(searchChar, modifyWith) - replaces a part of a string with another string and returns the new string.

  CHANGE CASE OF A STRING
  -----------------------

  String.toUpperCase() - changes all the letters of a string to uppercase.

  String.toLowerCase() - changes all the letters of a string to lowercase.

  NOTE - All other characters remain intact.

  EXTRACTING PART OF A STRING OR MODIFYING PART OF A STRING
  ----------------------------------------

  String.trim() - removes the leading and trailing white spaces from a string and returns the trimmed string.

  String.slice(startIndex, endIndex) - Extracts part of a string and returns it as a new string without modifying the original string.

  String.split(splitAtThis) - This method splits a string into multiple sub parts at a searching pattern, puts them into an ordered list (array), and returns it.
