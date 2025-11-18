// =============================================================
// Array search methods: find, findIndex, indexOf, lastIndexOf,
// includes, some, every — explained with examples
// =============================================================

const numbers = [1, 2, 3, 2, 4, 2];
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 },
  { id: 4, name: 'Monitor', price: 250 }
];

console.log('=== FIND ===');
// Purpose: return the first element that satisfies the predicate
// Returns: the FOUND element (not an array), or undefined if none

// Example: find the first product with price > 300
const expensive = products.find(p => p.price > 300);
console.log(expensive); // { id: 1, name: 'Laptop', price: 1000 }

// Example: find a number greater than 3
console.log(numbers.find(n => n > 3)); // 4
// If nothing matches, returns undefined
console.log(numbers.find(n => n > 10)); // undefined

console.log('\n=== FINDINDEX ===');
// Purpose: return the index of the first element that satisfies the predicate
// Returns: index (0..length-1) or -1 if none found

const idx = products.findIndex(p => p.price > 300);
console.log(idx); // 0 (Laptop is at index 0)

console.log(numbers.findIndex(n => n === 2)); // 1 (first 2 at index 1)
console.log(numbers.findIndex(n => n === 99)); // -1

console.log('\n=== INDEXOF & LASTINDEXOF ===');
// Purpose: find the index of a primitive value in an array
// indexOf returns the first index, lastIndexOf returns the last
// NOTE: For objects, indexOf compares by reference, so it usually doesn't work as "value equality".

const primitiveIndex = numbers.indexOf(2);
console.log('first indexOf 2 ->', primitiveIndex); // 1
console.log('last indexOf 2 ->', numbers.lastIndexOf(2)); // 5

// For objects, indexOf will usually return -1 unless you pass the exact same object instance
const obj = { id: 5 };
const arrObjs = [obj, { id: 6 }];
console.log(arrObjs.indexOf(obj)); // 0
console.log(arrObjs.indexOf({ id: 5 })); // -1 (different object reference)

console.log('\n=== INCLUDES ===');
// Purpose: check whether an array includes a primitive value
// Returns: true/false

console.log(numbers.includes(3)); // true
console.log(numbers.includes(42)); // false

// includes is useful for simple membership tests (primitives only)

console.log('\n=== SOME ===');
// Purpose: test whether at least one element passes the predicate
// Returns: boolean

// Are there any products cheaper than $300?
console.log(products.some(p => p.price < 300)); // true (Monitor at 250)

// Is there any even number in numbers?
console.log(numbers.some(n => n % 2 === 0)); // true

console.log('\n=== EVERY ===');
// Purpose: test whether ALL elements pass the predicate
// Returns: boolean

// Are all products priced over $200?
console.log(products.every(p => p.price > 200)); // true (smallest is 250)

// Are all numbers greater than 0?
console.log(numbers.every(n => n > 0)); // true

// =============================================================
// Practical notes / when to use which:
// - Use `indexOf` / `includes` for primitives (strings, numbers, booleans).
// - Use `find` / `findIndex` when you need to search by a condition or object property.
// - Use `lastIndexOf` to locate the last occurrence of a primitive value.
// - Use `some` / `every` to convert a predicate over elements into a boolean.
// - For objects, prefer `find`/`findIndex` or convert to a primitive key map when doing membership checks.
// =============================================================

// =============================================================
// Short examples that compare behaviors
// =============================================================

// 1) Searching for an object by value vs reference
const a = { x: 1 };
const b = { x: 1 };
const list = [a];
console.log('\nobject reference check with indexOf:', list.indexOf(a)); // 0
console.log('object value check with indexOf:', list.indexOf(b)); // -1
console.log('object value check with find:', list.find(o => o.x === 1)); // { x: 1 }

// 2) Chain examples: check if there exists an in-stock product over $400
const products2 = [
  { name: 'A', price: 100, inStock: true },
  { name: 'B', price: 450, inStock: false },
  { name: 'C', price: 600, inStock: true }
];

const exists = products2.some(p => p.inStock && p.price > 400);
console.log('\nExists in-stock product over $400? ->', exists); // true (C)

// 3) Use findIndex to replace or update an element in-place
const indexToUpdate = products2.findIndex(p => p.name === 'B');
if (indexToUpdate !== -1) {
  products2[indexToUpdate] = { ...products2[indexToUpdate], inStock: true };
}
console.log('\nAfter update:', products2);

// End of file
