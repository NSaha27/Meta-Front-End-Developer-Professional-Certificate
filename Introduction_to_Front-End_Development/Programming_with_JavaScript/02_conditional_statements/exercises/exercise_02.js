/*
  Give discount based on age, gender for metro ticket
    - Females get 50% off
    - Kids under 5 years of age are free
    - Kids upto 8 years have half ticket
    - People over 65 years of age only pay 30% of the ticket
    - In case of multiple discounts max discount will apply.
*/

let rateOfDiscount = 0;
const gender = "female";
const age = 75;
const ticketPrice = 29;

if(age <= 5){
  rateOfDiscount = 100;
}else if(age <= 8){
  rateOfDiscount = 50;
}else if(age <= 65){
  if(gender === "female"){
    rateOfDiscount = 50;
  }
}else{
  rateOfDiscount = 70;
}

const amountToPay = Math.ceil(ticketPrice * (100 - rateOfDiscount) / 100);

console.log(`You need to pay Rs.${amountToPay}/-`);