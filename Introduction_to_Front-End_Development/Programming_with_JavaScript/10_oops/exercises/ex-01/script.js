// Simple Objects

// Calculate net amount of different purchases
const purchase1 = {
  pID: 101,
  name: "Bajaj Pulser 160CC Bike",
  price: 140000,
  discount: 10,
  taxRate: 18,
  calcGrossAmount: function(){return this.price * (100 - this.discount) / 100},
  calcNetAmount: function(){
    const grossAmount = this.calcGrossAmount();
    return (grossAmount * (100 + this.taxRate) / 100);
  }
};
const purchase2 = {
  pID: 102,
  name: "Mahindra Thar",
  price: 1200000,
  discount: 15,
  taxRate: 28,
  calcGrossAmount: function(){return this.price * (100 - this.discount) / 100},
  calcNetAmount: function(){
    const grossAmount = this.calcGrossAmount();
    return (grossAmount * (100 + this.taxRate) / 100);
  }
};

console.log(`Receipt 1:
Product: ${purchase1.name}
Net Amount(Rs.): ${purchase1.calcNetAmount()}`);
console.log();

console.log(`Receipt 2:
Product: ${purchase2.name}
Net Amount(Rs.): ${purchase2.calcNetAmount()}`);