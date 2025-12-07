// Creating a demo class called "Car"

class Car {
  constructor(name, model, type, manfYear, price){
    this.carName = name;
    this.carModel = model;
    this.carType = type;
    this.carManfYear = manfYear;
    this.carPrice = price
  }
  calcNetPrice(){
    let taxRate = 18;
    if(this.carType === "luxery"){
      taxRate = 27;
    }
    return Math.round(this.carPrice * 0.9 * (100 + taxRate) / 100);
  }
  getAllDetails(){
    return `Car details:
    Name       : ${this.carName}
    Model      : ${this.carModel}
    Manf. Year : ${this.carManfYear}
    Price(Rs.) : ${this.calcNetPrice()}`;
  }
}

const hyundaiI20 = new Car("Hyundai", "I20", "commuter", "2024", 950000);
const fordMustang = new Car("Ford", "Mustang", "luxery", "2025", 7460000);

console.log("Hyundai", hyundaiI20.getAllDetails());
console.log();
console.log("Ford", fordMustang.getAllDetails());