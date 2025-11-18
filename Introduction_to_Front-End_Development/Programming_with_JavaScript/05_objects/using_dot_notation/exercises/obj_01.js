// creating an empty object literal at first, then adding properties and values to it

// example - 1
const user1 = {};
user1.username = "NILADRISAHA";
user1.name = "Niladri Saha";
user1.sex = "male";
user1.address = "Liluah, Howrah, WB, 711204";
user1.phone = "+918420520194";
user1.email = "niladri.saha31@gmail.com";

console.log(user1);
console.log("User's name:", user1.name);
console.log("User's phone no.:", user1.phone);
console.log("User's email ID:", user1.email);
console.log();

// example - 2
const product1 = {};
product1.ID = "FMOBT12538WB";
product1.name = "Fortune Kachhi Ghani Mustered Oil";
product1.type = "cooking oil (mustered)";
product1.brand = "Fortune";
product1.manufacturer = "Adani Wilmar";
product1.manfLicense = "LIC0153280431UP";
product1.qty = 1000;
product1.price = 170.00;

console.log(product1);
console.log("Product name:", product1.name);
console.log("Product price (Rs.):", product1.price);
console.log();

// Declaring an object literal and adding key-value pairs to it

const product2 = {
  ID: "IGBR523122UP",
  name: "India Gate Basmati Rice",
  type: "rice",
  brand: "India Gate",
  manufacturer: "India Gate Pvt. Ltd.",
  manfLicense: "LIC4753620448WB",
  qty: 1000,
  price: 120.00
};

console.log(product2);
console.log("Product name:", product2.name);
console.log("Product brand:", product2.brand);
console.log("Product price (Rs.) per kg.:", product2.price);