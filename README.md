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

