/*
  -------------------------------------------
  USAGE OF MAP, FILTER, AND REDUCE METHODS
  -------------------------------------------

  Array.map() - Takes an array and returns a new array of the same size with transformed values.

  Array.filter() - Takes an array and returns a new array with only elements passing a test.

  Array.reduce() - Takes an array and combines all elements into one result (number, object, etc.)

*/
const nums = [1, 2, 3, 4, 5, 6];
const products = [
  {name: "Laptop", price: 600, inStock: true},
  {name: "Mobile", price: 200, inStock: true},
  {name: "Tablet", price: 400, inStock: false},
  {name: "Monitor", price: 150, inStock: true},
  {name: "Desktop", price: 700, inStock: false},
  {name: "Refridgerator", price: 300, inStock: false}
];

// Array.map()

// transforming nums array
const squares = nums.map(num => num ** 2);
// console.log(squares);

const cubes = nums.map(num => num ** 3);
// console.log(cubes);

// transforming products array

// find the names of the products and whether they are in stock or not
const prodNamesAndAreInStock = products.map(prod => {
  return {name: prod.name, "is in stock": prod.inStock};
})
// console.log(prodNamesAndAreInStock);

// find the names of the products and prices
const prodPrices = products.map(prod => {
  return {name: prod.name, price: prod.price};
});
// console.log(prodPrices);

// adding doller symbol before each price
// const prodPriceWithDoller = products.map(prod => {
//   prod.price = `$${prod.price}`;
//   return prod;
// });
// console.log(prodPriceWithDoller);

// Array.filter()

// find all those product that have a price more than 500
const prodPriceGT500 = products.filter(prod => prod.price > 500);
// console.log(prodPriceGT500);

// find all those products that are in stock
const prodInStock = products.filter(prod => prod.inStock);
// console.log(prodInStock);

// Array.reduce()

// total cost of all products
const totalCostOfProduct = products.reduce((total, prod) => {
  total += prod.price;
  return total;
}, 0);
// console.log(totalCostOfProduct);

// most expensive product
const mostExpensiveProd = products.reduce((mostExpnProd, prod) => {
  return prod.price > mostExpnProd ? prod.price : mostExpnProd;
}, "");
// console.log(mostExpensiveProd);

// least expensive product
const leastExpensiveProd = products.reduce((leastExpnProd, prod) => {
  return prod.price < leastExpnProd ? prod.price : leastExpnProd;
}, products[0].price);
// console.log(leastExpensiveProd);

// Group products by stock status
const groupProdByStock = products.reduce((group, prod) => {
  const key = prod.inStock ? "inStock" : "outOfStock";
  if(!group[key]){
    group[key] = [];
  }
  group[key].push(key === "inStock" ? {name: prod.name, price: prod.price} : {name: prod.name, price: "unknown"});
  return group;
}, {});
console.log(groupProdByStock);
