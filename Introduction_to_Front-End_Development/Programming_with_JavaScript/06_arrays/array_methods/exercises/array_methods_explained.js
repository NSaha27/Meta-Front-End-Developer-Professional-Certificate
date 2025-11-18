// ============================================================================
// JavaScript Array Methods: map, filter, and reduce
// ============================================================================

// Sample data
const numbers = [1, 2, 3, 4, 5];
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
  { name: 'Monitor', price: 250, inStock: true }
];

// ============================================================================
// 1. MAP METHOD
// ============================================================================
// Purpose: Transform each element in an array using a function
// Returns: A new array with the same length as the original
// Use case: Convert data from one format to another

console.log("=== MAP EXAMPLES ===\n");

// Example 1: Square each number
const squared = numbers.map(num => num * num);
console.log("Original numbers:", numbers);
console.log("Squared:", squared);
// Output: Squared: [ 1, 4, 9, 16, 25 ]

// Example 2: Extract product names
const productNames = products.map(product => product.name);
console.log("\nProduct names:", productNames);
// Output: ['Laptop', 'Phone', 'Tablet', 'Monitor']

// Example 3: Convert prices to include currency symbol
const pricesWithCurrency = products.map(product => `$${product.price}`);
console.log("Prices:", pricesWithCurrency);
// Output: ['$1000', '$500', '$300', '$250']

// Example 4: Map with index (second parameter)
const numbersWithIndex = numbers.map((num, index) => `Position ${index}: ${num}`);
console.log("\nWith index:", numbersWithIndex);
// Output: ['Position 0: 1', 'Position 1: 2', ...]

// ============================================================================
// 2. FILTER METHOD
// ============================================================================
// Purpose: Create a new array with only elements that pass a test
// Returns: A new array with fewer (or equal) elements than original
// Use case: Extract specific data based on conditions

console.log("\n=== FILTER EXAMPLES ===\n");

// Example 1: Get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
// Output: [ 2, 4 ]

// Example 2: Get only products in stock
const inStockProducts = products.filter(product => product.inStock);
console.log("In stock products:", inStockProducts.map(p => p.name));
// Output: ['Laptop', 'Tablet', 'Monitor']

// Example 3: Get expensive products (price > 400)
const expensiveProducts = products.filter(product => product.price > 400);
console.log("Expensive products (>$400):", expensiveProducts.map(p => p.name));
// Output: ['Laptop', 'Phone']

// Example 4: Filter with index
const firstTwoNumbers = numbers.filter((num, index) => index < 2);
console.log("First two numbers:", firstTwoNumbers);
// Output: [ 1, 2 ]

// ============================================================================
// 3. REDUCE METHOD
// ============================================================================
// Purpose: Reduce array to a single value by accumulating results
// Returns: A single value (number, string, object, etc.)
// Use case: Sum, average, count, or build complex objects from arrays

console.log("\n=== REDUCE EXAMPLES ===\n");

// Example 1: Sum all numbers
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value
console.log("Sum of numbers:", sum);
// Output: 15

// Example 2: Find product with highest price
const mostExpensive = products.reduce((max, product) => {
  return product.price > max.price ? product : max;
});
console.log("Most expensive product:", mostExpensive.name, `($${mostExpensive.price})`);
// Output: Most expensive product: Laptop ($1000)

// Example 3: Count items
const count = numbers.reduce((total, num) => total + 1, 0);
console.log("Count of numbers:", count);
// Output: 5

// Example 4: Calculate total inventory value (in stock only)
const totalValue = products.reduce((sum, product) => {
  if (product.inStock) {
    return sum + product.price;
  }
  return sum;
}, 0);
console.log("Total value of in-stock products: $" + totalValue);
// Output: Total value of in-stock products: $1550

// Example 5: Group products by stock status
const groupedByStock = products.reduce((groups, product) => {
  const key = product.inStock ? 'inStock' : 'outOfStock';
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(product.name);
  return groups;
}, {});
console.log("Grouped by stock:", groupedByStock);
// Output: { inStock: ['Laptop', 'Tablet', 'Monitor'], outOfStock: ['Phone'] }

// ============================================================================
// COMBINING MAP, FILTER, AND REDUCE
// ============================================================================
// These methods can be chained for powerful transformations

console.log("\n=== COMBINING METHODS ===\n");

// Get total price of all in-stock products
const totalInStockPrice = products
  .filter(product => product.inStock)           // Filter in-stock items
  .map(product => product.price)                // Extract prices
  .reduce((sum, price) => sum + price, 0);      // Sum them up

console.log("Total price of in-stock products: $" + totalInStockPrice);
// Output: Total price of in-stock products: $1550

// Double each even number
const doubledEvens = numbers
  .filter(num => num % 2 === 0)    // Get even numbers: [2, 4]
  .map(num => num * 2);             // Double them: [4, 8]

console.log("Doubled even numbers:", doubledEvens);
// Output: [4, 8]

// Calculate average price of products over $300
const avgExpensivePrice = products
  .filter(p => p.price > 300)
  .map(p => p.price)
  .reduce((sum, price, index, arr) => {
    sum += price;
    // On the last element, return average instead
    return index === arr.length - 1 ? sum / arr.length : sum;
  }, 0);

console.log("Average price of products over $300: $" + avgExpensivePrice.toFixed(2));
// Output: Average price of products over $300: $583.33

// ============================================================================
// SUMMARY TABLE
// ============================================================================
/*
┌─────────┬──────────────────────────┬──────────────────────────┬─────────────────────────┐
│ Method  │ Input                    │ Output                   │ Common Use              │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────────────────┤
│ map()   │ Array of N items         │ Array of N items         │ Transform data          │
│         │                          │ (transformed)            │                         │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────────────────┤
│ filter()│ Array of N items         │ Array of M items (M≤N)   │ Select matching items   │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────────────────┤
│ reduce()│ Array of N items         │ Single value             │ Aggregate/summarize     │
└─────────┴──────────────────────────┴──────────────────────────┴─────────────────────────┘
*/
