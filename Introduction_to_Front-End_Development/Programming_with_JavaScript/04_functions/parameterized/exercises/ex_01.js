const groceryItems = [
  {
    id: 1,
    name: "Basmati Rice",
    type: "rice",
    brand: "India Gate",
    quality: "long grain",
    qty: 1000,
    price: 120
  },
  {
    id: 2,
    name: "Ratna Rice",
    type: "rice",
    brand: "Agro Fresh",
    quality: "premium",
    qty: 1000,
    price: 60
  },
  {
    id: 3,
    name: "Moong Dal",
    type: "dal",
    brand: "Agro Fresh",
    quality: "non-splitted",
    qty: 1000,
    price: 100
  },
  {
    id: 4,
    name: "Moong Dal",
    type: "dal",
    brand: "Tata Sampann",
    quality: "splitted",
    qty: 1000,
    price: 112
  },
  {
    id: 5,
    name: "Munsoor Dal",
    type: "dal",
    brand: "Agro Fresh",
    quality: "non-splitted",
    qty: 1000,
    price: 90
  },
  {
    id: 6,
    name: "Munsoor Dal",
    type: "dal",
    brand: "Tata Sampann",
    quality: "splitted",
    qty: 1000,
    price: 100
  },
  {
    id: 7,
    name: "Mustered Oil",
    type: "cooking oil",
    brand: "Fortune",
    quality: "premium kachhi-ghani",
    qty: 1000,
    price: 165
  },
  {
    id: 8,
    name: "Mustered Oil",
    type: "cooking oil",
    brand: "Emami Healthy & Tasty",
    quality: "kachhi-ghani",
    qty: 1000,
    price: 160
  },
  {
    id: 9,
    name: "Refined Soyabean Oil",
    type: "cooking oil",
    brand: "Fortune",
    quality: "normal",
    qty: 1000,
    price: 140
  },
  {
    id: 10,
    name: "Refined Soyabean Oil",
    type: "cooking oil",
    brand: "Emami Healthy & Tasty",
    quality: "ultra-light",
    qty: 1000,
    price: 125
  },
  {
    id: 11,
    name: "Sugar Big",
    type: "sugar",
    brand: "Agro Fresh",
    quality: "big",
    qty: 1000,
    price: 48
  },
  {
    id: 12,
    name: "Sugar Small",
    type: "sugar",
    brand: "Agro Fresh",
    quality: "small",
    qty: 1000,
    price: 45
  },
  {
    id: 13,
    name: "Tata Salt",
    type: "salt",
    brand: "Tata",
    quality: "iodised",
    qty: 1000,
    price: 28
  },
  {
    id: 14,
    name: "Aashirbad Salt",
    type: "salt",
    brand: "Aashirbad",
    quality: "iodised",
    qty: 1000,
    price: 26
  },
  {
    id: 15,
    name: "Aashirbad Aata",
    type: "wheat",
    brand: "Aashirbad",
    quality: "fine",
    qty: 1000,
    price: 48
  },
  {
    id: 16,
    name: "Agro Fresh Aata",
    type: "wheat",
    brand: "Agro Fresh",
    quality: "normal",
    qty: 1000,
    price: 45
  },
  {
    id: 17,
    name: "Lifeboy Soap",
    type: "soap",
    brand: "Lifeboy",
    quality: "lemon flavour",
    qty: 50,
    price: 20
  },
  {
    id: 18,
    name: "Lux Soap",
    type: "soap",
    brand: "Lux",
    quality: "lavender flavour",
    qty: 50,
    price: 28
  },
  {
    id: 19,
    name: "Dove Soap",
    type: "soap",
    brand: "Dove",
    quality: "Moisturiser",
    qty: 50,
    price: 40
  },
  {
    id: 20,
    name: "Tomato Sauce",
    type: "sauce",
    brand: "Kishan",
    quality: "ketchup",
    qty: 200,
    price: 32
  },
  {
    id: 21,
    name: "Jeera Powder",
    type: "masala",
    brand: "Catch",
    quality: "powder",
    qty: 50,
    price: 22
  },
  {
    id: 22,
    name: "Jeera Powder",
    type: "masala",
    brand: "Sunrise",
    quality: "powder",
    qty: 25,
    price: 12
  },
  {
    id: 23,
    name: "Dhaniya Powder",
    type: "masala",
    brand: "Catch",
    quality: "powder",
    qty: 50,
    price: 18
  },
  {
    id: 24,
    name: "Dhaniya Powder",
    type: "masala",
    brand: "Sunrise",
    quality: "powder",
    qty: 25,
    price: 10
  },
  {
    id: 25,
    name: "Sunlight Colour Guard Surf (Big Pack)",
    type: "surf",
    brand: "Sunlight",
    quality: "colour guard",
    qty: 500,
    price: 48
  },
  {
    id: 25,
    name: "Sunlight Colour Guard Surf (Small Pack)",
    type: "surf",
    brand: "Sunlight",
    quality: "colour guard",
    qty: 100,
    price: 10
  }
];

const GSTRATE = 12;

function calcGst(gstRate, gt){
  return Math.round(gt * gstRate / 100);
}

function calcGT(orders){
  let gt = 0;
  for(let i = 0; i < orders.length; i++){
    const orderedItemName = orders[i].name;
    const orderedItemBrand = orders[i].brand;
    const orderedItemQty = orders[i].qty;
    const itemFound = groceryItems.find((elem) => elem.name.toLowerCase() === orderedItemName.toLowerCase() && elem.brand.toLowerCase() === orderedItemBrand.toLowerCase());
    if(!itemFound){
      gt += 0;
    }else{
      gt += Math.round(itemFound.price * orderedItemQty / itemFound.qty);
    }
  }
  return gt;
}

function generateReceipt(orders){
  const duplicateOrders = [...orders];
  for(let i = 0; i < duplicateOrders.length; i++){
    const itemFound = groceryItems.find((elem) => elem.name.toLowerCase() === duplicateOrders[i].name.toLowerCase() && elem.brand.toLowerCase() === duplicateOrders[i].brand.toLowerCase());
    if(!itemFound){
      duplicateOrders[i].price = 0;
    }else{
      duplicateOrders[i].price = Math.round(itemFound.price * duplicateOrders[i].qty / itemFound.qty);
    }
  }
  const gt = calcGT(duplicateOrders);
  const gst = calcGst(GSTRATE, gt);
  const receipt = [...duplicateOrders, {grossAmount: gt, GST: gst, netAmount: (gt + gst)}];
  return receipt;
}

const orders = [
  {
    name: "Ratna Rice",
    brand: "Agro Fresh",
    qty: 750
  },
  {
    name: "Munsoor Dal",
    brand: "Tata Sampann",
    qty: 250
  },
  {
    name: "Refined Soyabean Oil",
    brand: "Emami Healthy & Tasty",
    qty: 500
  },
  {
    name: "Sugar Small",
    brand: "Agro Fresh",
    qty: 300
  },
  {
    name: "Tata Salt",
    brand: "Tata",
    qty: 1000
  },
  {
    name: "Lifeboy Soap",
    brand: "Lifeboy",
    qty: 50
  },
  {
    name: "Jeera Powder",
    brand: "Sunrise",
    qty: 25
  },
  {
    name: "Dhaniya Powder",
    brand: "Catch",
    qty: 50
  },
  {
    name: "Sunlight Colour Guard Surf (Small Pack)",
    brand: "Sunlight",
    qty: 100
  }
];

console.table(generateReceipt(orders));
