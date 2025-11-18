const product1 = {
  ID: 1,
  name: "Fortune Kachhi Ghani Mustered Oil",
  type: "grocery",
  brand: "Fortune",
  manufacturer: "Adani Wilmar",
  "batch number": "FMO233X48C9",
  MRP: 172,
  GSTRate: function() {
    let gstRate;
    switch(this.type){
      case "garments":
      case "bedding":
        gstRate = 12;
        break;
      case "grocery":
      case "food":
        gstRate = 5;
        break;
      case "electronics":
      case "sports":
        gstRate = 18;
        break;
      case "furniture":
      case "commuter":
        gstRate = 28;
        break;
      case "vegetable":
      case "fruit":
        gstRate = 1;
        break;
      default:
        gstRate = 7;
    }
    return gstRate;
  },
  netAmount: function() {
    const amountAfterDiscount = this.MRP * 90 / 100;
    const gst = amountAfterDiscount * this.GSTRate() / 100;
    return (amountAfterDiscount + gst);
  }
};

console.log(product1);
console.log("Product name:", product1["name"]);
console.log("Net price per unit:", Math.ceil(product1.netAmount()));