/* 
  create a Food class, inherit a class called "IndianFoods" from it, also inherit a class called "SouthIndianFoods" from it.
*/

class Foods{
  constructor(name, category, cuisine, isVegetarian, price){
    this.name = name;
    this.category = category;
    this.cuisine = cuisine;
    this.isVegetarian = isVegetarian;
    this.price = price;
  }
  getBasicFoodDetails(){
    return `Basic food details:
    Name of the food : ${this.name}
    Category         : ${this.category}
    Cuisine          : ${this.cuisine}
    Is vegetarian    : ${this.isVegetarian}
    Price (in Rs.)   : ${this.price}`
  }
}

class IndianFoods extends Foods{
  constructor(name, category, cuisine, isVegetarian, price, spiceLevel){
    super(name, category, cuisine, isVegetarian, price);
    this.spiceLevel = spiceLevel;
  }
  getAdditionalFoodDetails(){
    return `Additional food details:
    Spice level    : ${this.spiceLevel}`;
  }
}