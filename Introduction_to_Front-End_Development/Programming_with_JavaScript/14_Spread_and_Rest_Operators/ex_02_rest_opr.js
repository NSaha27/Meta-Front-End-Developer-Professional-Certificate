/*
  SPREAD OPERATOR
  ---------------
  - Expands an array, or object, or a string into multiple elements
  - Used for concatenation, to create a shallow copy, or for passing arguments

  REST OPERATOR
  -------------
  - Gathers multiple elements to an array or to an object
  - Used for destructuring or collecting function arguments
*/

// --- Rest Operator ---

// combining rest of the elements together
const favFoods = ["Mixed Chowmine", "Biryani", "Mixed Fried Rice", "Mattar Paneer", "Paneer Tikka", "Mughlai", "Khichri", "Palang Paneer", "Aloo Paratha", "Kachori"];

const [firstPreference, secondPreference, thirdPreference, ...otherFavFoods] = favFoods;

console.log("first prefered food:", firstPreference);
console.log("second prefered food:", secondPreference);
console.log("third prefered food:", thirdPreference);
console.log("other favourite foods:", otherFavFoods.toString());

console.log();

// accepting multiple arguments into one rest parameter of a function
function getOrder(...items){
  let orderedItems = "";
  items.forEach((item, indx) => {
    orderedItems += `${indx + 1}) ${item.iName} (${item.iQty}kg/ltr)\n`;
  })
  return orderedItems;
}

console.log("The following items were ordered:");
console.log(getOrder({iName: "Rice", iQty: 2}, {iName: "Sugar", iQty: 0.5}, {iName: "Salt", iQty: 1}, {iName: "Vegetable Cooking Oil", iQty: 0.9}, {iName: "Brown Bread", iQty: 0.5}, {iName: "Wheat", iQty: 1}));