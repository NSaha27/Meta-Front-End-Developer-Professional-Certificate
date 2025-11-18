/*
  creating an empty object literal and adding properties and values into it using bracket notation
*/

const user1 = {};
user1["username"] = "SUSHILUPADHYAY";
user1["name"] = "Sushil Upadhyay";
user1["sex"] = "male";
user1["address"] = "Gahmar, Ghazipur, UP";
user1["mobile"] = "+917947823144";
user1["email"] = "sushil.upadhyay28@gmail.com";

console.log(user1);
console.log("User's name:", user1["name"]);
console.log(`User's mobile no.: ${user1["mobile"]}`);
console.log(`User's email ID: ${user1.email}`);
console.log();

/*
  An object with bracket notation can accept blank space(s) in a property name 
*/

const product1 = {};
product1["ID"] = "FMO7127450WB";
product1["name"] = "Fortune Kachhi Ghani Mustered Oil";
product1["type"] = "cooking oil (mustered)";
product1["brand"] = "Fortune";
product1["manufacturer"] = "Adani Wilmar";
product1["batch number"] = "BTC25X629AW";
product1["price per unit"] = 172.00;

console.log(product1);
console.log("Product name:", product1["name"]);
console.log("Product brand:", product1["brand"]);
console.log("Product manufacturer:", product1["manufacturer"]);
console.log("Product batch number:", product1["batch number"]);
console.log("Product price per unit:", product1["price per unit"]);

/*
  Pass an expression as the property name
*/

const courseProperties = ["ID", "name", "subject", "author", "topics followed", "course duration in month", "cost"];

const coursePurchased = [
  {
    "ID": 1,
    "name": "Meta Front-end Developer Professional Certificate",
    "subject": "front-end development",
    "author": "Meta team",
    "topics followed": ["HTML", "CSS", "Bootstrap", "JavaScript", "Git & GitHub", "React JS", "Front-end capstone project"],
    "course duration in month": 6,
    "cost": 2899
  },
  {
    "ID": 2,
    "name": "IBM Back-end Developer Professional Certificate",
    "subject": "back-end development",
    "author": "IBM team",
    "topics followed": ["Software Engineering Basics", "HTML", "CSS", "JavaScript", "Git & GitHub", "Python", "Django", "Flask", "Docker", "Kubernetes", "DevOps", "Containerization & CI CD Pipeline", "Back-end Capstone Project"],
    "course duration in month": 6,
    "cost": 2899
  }
];

for(let i = 0; i < coursePurchased.length; i++){
  for(let j = 0; j < courseProperties.length; j++){
    console.log(coursePurchased[i][courseProperties[j]]);
  }
}