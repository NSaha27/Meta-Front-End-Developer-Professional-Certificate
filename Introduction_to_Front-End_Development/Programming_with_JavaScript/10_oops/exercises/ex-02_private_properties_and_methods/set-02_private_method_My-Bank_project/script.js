"use strict";

const Customer = require("customer.js");
const Account = require("account.js");

// ACCESSING REQUIRED DOM ELEMENTS
const custReg = document.querySelector(".cust-reg");
const regForm = document.querySelector(".reg-form");
const custLogin = document.querySelector(".cust-login");
const loginForm = document.querySelector(".login-form");
const custHome = document.querySelector(".cust-home");
const menuLink = document.querySelectorAll(".menu-link");
const deposit = document.querySelector(".deposit");
const depForm = document.querySelector(".dep-form");
const withdraw = document.querySelector(".withdraw");
const wdrForm = document.querySelector(".wdr-form");
const transfer = document.querySelector(".transfer");
const trnfForm = document.querySelector(".trnf-form");
const checkTransactions = document.querySelector(".check-transactions");
const messages = document.querySelectorAll(".message");

// Handle Customer Registration
regForm.addEventListener("submit", function(evnt){
  evnt.preventDefault();

  const [ID, name, aadhaar, address, phone, email, password, accOpenMoney] = evnt.target;
  try{
    const newCustomer = new Customer(ID.value, name.value, aadhaar.value, address.value, phone.value, email.value, password.value, accOpenMoney.value);
    const custRegResult = newCustomer.saveCustDetails();
    if(Object.hasOwn(custRegResult, "accNum") && Object.hasOwn(custRegResult, "balance")){
      try{
        // create an account for the new customer
        const newAcc = new Account(custRegResult.accNum, custRegResult.balance);
        const accOpResult = newAcc.addInitialAcc();
        if(typeof accOpResult !== "string")
          throw accOpResult;
        custReg.classList.add("inactive");
        custLogin.classList.remove("inactive");
        messages[1].innerHTML = accOpResult;
      }catch(err){
        throw err;
      }
    }else{
      regForm.reset();
      throw custRegResult;
    }
  }catch(err){
    messages[0].innerHTML = err.message;
    console.error(err.stack);
  }
})

// Handle customer Log in
loginForm.addEventListener("submit", function(evnt){
  evnt.preventDefault();

  const [ID, password] = evnt.target();
  const result = Customer.fetchCustDetails(ID, password);
  if(typeof result !== "object"){
    messages[1].textContent = "*** invalid customer ID or password!";
    loginForm.reset();
    return false;
  }
  custLogin.classList.add("inactive");
  custHome.classList.remove("inactive");
  messages[2].textContent = `log in successful, welcome back ${result.name} !`;
})

for(let i=0; i<menuLink.length; i++){
  menuLink[i].addEventListener("click", function(evnt){
    evnt.preventDefault();
  
    switch(i){
      case 0:
        deposit.classList.remove("inactive");
        withdraw.classList.add("inactive");
        transfer.classList.add("inactive");
        checkTransactions.classList.add("inactive");
        break;
      case 1:
        deposit.classList.add("inactive");
        withdraw.classList.remove("inactive");
        transfer.classList.add("inactive");
        checkTransactions.classList.add("inactive");
        break;
      case 2:
        deposit.classList.add("inactive");
        withdraw.classList.add("inactive");
        transfer.classList.remove("inactive");
        checkTransactions.classList.add("inactive");
        break;
      case 3:
        deposit.classList.add("inactive");
        withdraw.classList.add("inactive");
        transfer.classList.add("inactive");
        checkTransactions.classList.remove("inactive");
        break;
      default:
        deposit.classList.remove("inactive");
    }
  })
}

// handle deposits
depForm.addEventListener("submit", function(ev){
  ev.preventDefault();

  const [accNum, depAmt] = ev.target;

})