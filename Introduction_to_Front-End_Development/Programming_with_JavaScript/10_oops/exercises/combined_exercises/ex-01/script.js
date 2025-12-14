class Gadget{
  constructor(name, catg, selPrice, rateOfDiscount = 10){
    this.name = name;
    this.catg = catg;
    this.selPrice = selPrice;
    this.rateOfDiscount = rateOfDiscount;
  }
  getTaxRate(){
    let taxRate;
    switch(this.catg){
      case "mobile":
      case "computer accessories":
      case "wired headphones":
      case "analog watches":
        taxRate = 7;
        break;
      case "battery":
      case "hair accessories":
      case "bluetooth headsets":
      case "portable fans":
      case "digital watches":
        taxRate = 12;
        break;
      default:
        taxRate = 18;
    }
    return taxRate;
  }
  getNetAmount(){
    const amtAfterDiscount = Math.round(this.price * (100 - this.rateOfDiscount) / 100);
    return amtAfterDiscount;
  }
}

class Mobile extends Gadget{
  constructor(name, catg="mobile", isSmartPhone=false, connectivity="2G", hasCameraFac=false, hasTorchFac=true, mfgDt, mfgBy, mkdBy, selPrice, rateOfDiscount = 20){
    super(name, catg, selPrice, rateOfDiscount);
    this.isSmartPhone = isSmartPhone;
    this.connectivity = connectivity;
    this.hasCameraFac = hasCameraFac;
    this.hasTorchFac = hasTorchFac;
    this.mfgDt = mfgDt;
    this.mfgBy = mfgBy;
    this.mkdBy = mkdBy;
  }
  getFeatures(){
    const features = `Main features :
    Connectivity : ${this.connectivity}
    Camera Facility : ${this.hasCameraFac ? "yes" : "no"}
    Torch Facility : ${this.hasTorchFac}\n`;
    return features;
  }
  getMfgDetails(){
    return `Manufactured by : ${this.mfgBy}
    Manufacturing Date : ${this.mfgDt}`;
  }
  getMkdDetails(){
    return `Marketted by : ${this.mkdBy}`;
  }
}

class Watch extends Gadget{
  constructor(name, catg, color, isStylish=true, batteryCapacity="long", mfgDt, mfgBy, mkdBy, selPrice, rateOfDiscount = 10){
    super(name, catg, selPrice, rateOfDiscount);
    this.color = color;
    this.isStylish = isStylish;
    this.batteryCapacity = batteryCapacity;
    this.mfgDt = mfgDt;
    this.mfgBy = mfgBy;
    this.mkdBy = mkdBy;
  }
  getFeatures(){
    const features = `Main features :
    Color : ${this.color}
    Is stylish : ${this.isStylish ? "yes" : "no"}
    Battery Capacity : ${this.batteryCapacity === "long" ? "for longer use" : "for shorter use"}\n`;
    return features;
  }
  getMfgDetails(){
    return `Manufactured by : ${this.mfgBy}
    Manufacturing Date : ${this.mfgDt}`;
  }
  getMkdDetails(){
    return `Marketted by : ${this.mkdBy}`;
  }
}

class SmartMobile extends Mobile{
  constructor(name, catg="mobile", isSmartPhone=true, isAndroidBased=true, ram=6, processor="snapdragon", procSpeed=2, memory=128, screen="HD", mfgDt, mfgBy, mkdBy, selPrice, rateOfDiscount = 20){
    super(name, catg, isSmartPhone, mfgDt, mfgBy, mkdBy, selPrice, rateOfDiscount);
    this.isAndroidBased = isAndroidBased;
    this.ram = ram;
    this.processor = processor;
    this.procSpeed = procSpeed;
    this.memory = memory;
    this.screen = screen;
  }
  getFeatures(){
    let features = super.getFeatures();
    features += `\nOther features :
    RAM : ${this.ram}
    Processor : ${this.processor} processor @ ${this.procSpeed}GHz
    Memory : ${this.memory}GB
    Screen : ${this.screen}`;
    return features;
  }
}

class SmartWatch extends Watch{
  constructor(name, catg, brand="random", color="black", isStylish=true, batteryCapacity="long", hasCallingFac=false, hasHeartMontFac=true, hasStepCountFac=true, mfgDt, mfgBy, mkdBy, selPrice, rateOfDiscount = 10){
    super(name, catg, color, isStylish, batteryCapacity, mfgDt, mfgBy, mkdBy, selPrice, rateOfDiscount);
    this.brand = brand;
    this.hasCallingFac = hasCallingFac;
    this.hasHeartMontFac = hasHeartMontFac;
    this.hasStepCountFac = hasStepCountFac;
  }
  getFeatures(){
    let features = super.getFeatures();
    features += `\nOther Features :
    Calling facility : ${this.hasCallingFac ? "yes" : "no"}
    Heart monitoring facility : ${this.hasHeartMontFac ? "yes" : "no"}
    Step count facility : ${this.hasStepCountFac ? "yes" : "no"}\n`;
    return features;
  }
}

// start creating objects now...

// objects for mobiles
const motog85 = new SmartMobile("Motorola Moto G85 5G (Oliv Green, 128 GB)", "mobile", true, true, 8, "6s Gen 3 processor", 2.3, 128, "2400x1080 Pixels", "Feb, 2024", "Padget Electronics Pvt Ltd, A-23, Sector-60, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301", "Motorola Mobility India Pvt Ltd, Plot No. 5, 5th Floor, C. V. Raman Nagar, Bangalore 560093", 20999 );

// objects for watches
const boultRoverPro = new SmartWatch("Boult Rover Pro 1.43\" AMOLED", "watch", "Boult", "Ash Black", true, "short", true, true, true, "May, 2025", "EAST INDIA TECHNOLOGIES PVT LTD E 24-26, SITE-B, Surajpur IND AREA, GAUTAM BUDDHA NAGAR, Uttar Pradesh- 201306", "Exotic Mile Private Limited. B67, Block B, Wazirpur Industrial area, North west Delhi, India-110052", 1899, 15);

console.log(motog85.getFeatures());
console.log();
console.log(boultRoverPro.getFeatures());