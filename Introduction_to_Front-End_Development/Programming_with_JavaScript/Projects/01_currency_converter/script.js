const sourceAmt = document.getElementById("source-amount");
const unitFrom = document.getElementById("unit-from");
const targetAmt = document.getElementById("target-amount");
const unitTo = document.getElementById("unit-to");
const convertBtn = document.getElementById("convert-btn");

async function getConversionRate(baseCode, targetCode){
  const API_KEY = "0e43fcbddbc7cf608e9c51dd";
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${baseCode}/${targetCode}`;
  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result["conversion_rate"];
  }catch(err) {
    return err;
  }
}

(async function(){
  const baseCode = unitFrom.value;
  const targetCode = unitTo.value;
  const sourceAmount = Number(sourceAmt.value);
  try {
    if(isNaN(sourceAmount)){
      throw new Error("*invalid amount to convert!");
    }
    const conversionRate = await getConversionRate(baseCode, targetCode);
    if(typeof conversionRate !== "number"){
      throw new Error(conversionRate);
    }
    console.log(sourceAmount * conversionRate);
    document.getElementById("target-amount").value = sourceAmount * conversionRate;
  }catch(err){
    console.error(err.message);
  }
})()

convertBtn.addEventListener("click", async function(){
  const baseCode = unitFrom.value;
  const targetCode = unitTo.value;
  const sourceAmount = Number(sourceAmt.value);
  try {
    if(isNaN(sourceAmount)){
      throw new Error("*invalid amount to convert!");
    }
    const conversionRate = await getConversionRate(baseCode, targetCode);
    if(typeof conversionRate !== "number"){
      throw new Error(conversionRate);
    }
    console.log(sourceAmount * conversionRate);
    document.getElementById("target-amount").value = sourceAmount * conversionRate;
  }catch(err){
    console.error(err.message);
  }
})