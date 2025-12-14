/* 
USE OF GETTER AND SETTER METHODS
--------------------------------
Getter and Setter methods are used to modify data before they are returned.

Setter method is used to mutate properties of a class, and Getter method is used to return that mutated data.
*/

class Bike {
  constructor(bikename, cc, brand, price) {
    this._bikename = bikename;
    this.cc = cc;
    this.brand = brand;
    this._price = price;
  }
  get bikename() {
    return this._bikename;
  }
  set bikename(newName) {
    this._bikename = newName;
  }
  get price() {
    return this._price;
  }
  set price(newPrice=null) {
    if(newPrice) this._price = newPrice; 
  }
  getBikeDetails() {
    return `Bike details:
    Name  : ${this.brand} ${this.bikename}
    CC    : ${this.cc}
    Price : ${this.price}`;
  }
}

// object 1
const pulsorN160 = new Bike("Pulsor N 160", 160, "Bajaj", 149599);
pulsorN160.bikename = "Pulsor N Torq 160";
pulsorN160.price = 144999;
console.log(pulsorN160.getBikeDetails());
