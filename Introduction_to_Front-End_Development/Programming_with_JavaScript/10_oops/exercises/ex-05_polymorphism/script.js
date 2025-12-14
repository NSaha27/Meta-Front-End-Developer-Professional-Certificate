// Example on Polymorphism

// Example of Method Overriding
class Inventory{
  constructor(prodName, opStock){
    this.prodName = prodName;
    this.stock = opStock;
  }
  purchases(qty){
    this.stock += qty;
    console.log(`${qty} items were purchased.`);
  }
  purchaseReturn(qty){
    this.stock -= qty;
    console.log(`${qty} defective items were returned to the supplier.`);
  }
  sales(qty){
    this.stock -= qty;
    console.log(`${qty} items were sold.`);
  }
  salesReturn(qty){
    this.stock += qty;
    console.log(`${qty} defective items were returned by customers.`);
  }
  getClosingStock(){
    return this.stock;
  }
}

// create classes that will inherit Inventory class

class Saree extends Inventory{
  constructor(prodName, prodType, prodBrand, prodSeller, opStock){
    super(prodName, opStock);
    this.prodType = prodType;
    this.prodBrand = prodBrand;
    this.prodSeller = prodSeller;
  }
  purchases(qty){
    super.purchases(qty);
    console.log(`They were purchased from "${this.prodSeller}"`);
  }
  getClosingStock(){
    const clStock = super.getClosingStock();
    console.log(`${clStock} ${this.prodBrand} ${this.prodType} sarees are in stock.`);
  }
}

// object 1
const handloom = new Saree("Shantipuri premium quality handloom saree", "handloom", "Oscar Sarees", "Sri Nagendra Narayan Tant Center", 150);

// during the festive season, we sold almost 40 handloom sarees, let's create an entry of that data
handloom.sales(40);

// during that period, 8 of our handloom sarees were returned by our verified customers, let's have their entry.
handloom.salesReturn(8);

// our shop has a fresh purchase of 20 more handloom sarees, let's add them to our stock
handloom.purchases(20);

// out of the new purchases we found 3 sarees as defective, and returned them to our creditor, let's have an entry of them.
handloom.purchaseReturn(3);

// now, let's check our closing stock till today
handloom.getClosingStock();