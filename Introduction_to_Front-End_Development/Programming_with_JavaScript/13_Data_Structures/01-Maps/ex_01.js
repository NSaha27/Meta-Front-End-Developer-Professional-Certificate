/*
  Map is just like an object in JavaScript, but it doesn't have inheritance, protype. It is suitable to store data only.
*/

const product = new Map();
product.set("ID", "356");
product.set("batchNo", "37638");
product.set("name", "Nux Vomica 30");
product.set("composition", {alcohol: 91, dilution: 9});
product.set("manufacturer", "Sett Dey & Co (Homoeo) Lab");
product.set("isGMPCertified", true);
product.set("pkd", "sep, 25");
product.set("exd", "");
product.set("mrp", 45.00);

console.log("Product name:", product.get("name"));
console.log("Is GMP certified?", product.get("isGMPCertified"));
console.log("Packaging Date:", product.get("pkd"));
console.log("Expiry Date:", product.get("exd"));
console.log("MRP (Rs.):", product.get("mrp"));