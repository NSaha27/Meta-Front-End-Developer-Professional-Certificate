"use strict";

import Account from "./account.js";
import Customer from "./customer.js";
"./account.js";

// ACCESSING REQUIRED DOM ELEMENTS
const navLinks = document.querySelectorAll(".nav-link");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const custReg = document.querySelector(".cust-reg");
const regForm = document.querySelector(".reg-form");
const custLogin = document.querySelector(".cust-login");
const loginForm = document.querySelector(".login-form");
const custRegLink = document.querySelector(".cust-reg-link");
const custLoginLink = document.querySelector(".cust-login-link");
const custHome = document.querySelector(".cust-home");
const menuLink = document.querySelectorAll(".sub-menu-link");
const deposit = document.querySelector(".deposit");
const depForm = document.querySelector(".dep-form");
const withdraw = document.querySelector(".withdraw");
const wdrForm = document.querySelector(".wdr-form");
const transfer = document.querySelector(".transfer");
const trnfForm = document.querySelector(".trnf-form");
const checkTransactions = document.querySelector(".check-transactions");
const messages = document.querySelectorAll(".message");

// Handle Navbar Menu Links
for(let i=0; i<navLinks.length; i++){
  navLinks[i].addEventListener("click", function(ev){
    ev.preventDefault();
    switch(i){
      case 0:
        home.classList.remove("inactive");
        about.classList.add("inactive");
        custReg.classList.add("inactive");
        custLogin.classList.add("inactive");
        custHome.classList.add("inactive");
        break;
      case 1:
        home.classList.add("inactive");
        about.classList.remove("inactive");
        custReg.classList.add("inactive");
        custLogin.classList.add("inactive");
        custHome.classList.add("inactive");
        break;
      case 2:
        home.classList.add("inactive");
        about.classList.add("inactive");
        custReg.classList.add("inactive");
        custLogin.classList.remove("inactive");
        custHome.classList.add("inactive");
        break;
      default:
        home.classList.remove("inactive");
        about.classList.add("inactive");
        custReg.classList.add("inactive");
        custLogin.classList.add("inactive");
        custHome.classList.add("inactive");
    }
  });
}

// Handle Customer Registration
regForm.addEventListener("submit", function(evnt){
  evnt.preventDefault();

  const [custID, custName, custAadhaar, custAddress, custPhone, custEmail, custPsw, accOpenMoney] = evnt.target;
  try{
    const newCustomer = new Customer(custID.value.trim(), custName.value.trim(), custAadhaar.value.trim(), custAddress.value.trim(), custPhone.value.trim(), custEmail.value.trim(), custPsw.value.trim(), accOpenMoney.value.trim());
    const custRegResult = newCustomer.saveCustDetails();
    if(custRegResult instanceof Error){
      throw custRegResult;
    }else{
      try{
        const newAcc = new Account(custRegResult.accNum, custRegResult.accOpenMoney);
        const accOpenResult = newAcc.addInitialAcc();
        if(accOpenResult instanceof Error){
          throw accOpenResult;
        }else{
          custReg.classList.add("inactive");
          custLogin.classList.remove("inactive");
          messages[1].classList.remove("inactive");
          messages[1].innerHTML = accOpenResult;
        }
      }catch(err){
        throw err;
      }
    }
  }catch(err){
    regForm.reset();
    messages[0].classList.remove("inactive");
    messages[0].innerHTML = err.message;
    console.error(err.stack);
  }
})

custRegLink.addEventListener("click", function(ev){
  ev.preventDefault();
  home.classList.add("inactive");
  about.classList.add("inactive");
  custReg.classList.remove("inactive");
  custLogin.classList.add("inactive");
  custHome.classList.add("inactive");
})

// ADD HIDDEN FIELDS, CONTAINING CUSTOMER ACCOUNT NUMBER, FOR EACH OF THE CUSTOMER ACTION FORMS
function addHiddenField(key){
  const hiddenFormField = document.createElement("input");
  hiddenFormField.setAttribute("type", "hidden");
  hiddenFormField.setAttribute("name", "accNum");
  hiddenFormField.setAttribute("value", localStorage.getItem(key));
  return hiddenFormField;
}

// Handle customer Log in
loginForm.addEventListener("submit", function(evnt){
  evnt.preventDefault();

  const [custLoginID, custLoginPsw] = evnt.target;
  const result = Customer.fetchCustDetails(custLoginID.value.trim(), custLoginPsw.value.trim());
  if(typeof result !== "object" || (typeof result === "object" && Object.entries(result).length === 0)){
    messages[1].classList.remove("inactive");
    messages[1].textContent = "*** invalid customer ID or password!";
    loginForm.reset();
    return false;
  }
  // if login is successful and customer is authenticated, I'm using localStorage to temporarily store authentication data 
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("custID", result.ID);
  localStorage.setItem("authCustAccNum", result.accNum);

  custLogin.classList.add("inactive");
  custHome.classList.remove("inactive");
  messages[2].classList.remove("inactive");
  messages[2].textContent = `log in successful, welcome back ${result.name} !`;

  depForm.prepend(addHiddenField("authCustAccNum"));
  wdrForm.prepend(addHiddenField("authCustAccNum"));
  trnfForm.prepend(addHiddenField("authCustAccNum"));
})

custLoginLink.addEventListener("click", function(ev){
  ev.preventDefault();
  home.classList.add("inactive");
  about.classList.add("inactive");
  custReg.classList.add("inactive");
  custLogin.classList.remove("inactive");
  custHome.classList.add("inactive");
})

// Handle different customer action links
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
        const isLoggedIn = localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") : false;
        const authCustAccNum = localStorage.getItem("authCustAccNum") ? localStorage.getItem("authCustAccNum") : "";
        dispTransBal(isLoggedIn, authCustAccNum);
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

  try{
    const result = Account.deposit(accNum.value.trim(), depAmt.value.trim());
    if(result instanceof Error){
      throw result;
    }
    messages[2].classList.remove("inactive");
    messages[2].textContent = result;
    depForm.reset();
  }catch(err){
    messages[2].classList.remove("inactive");
    messages[2].textContent = err.message;
    depForm.reset();
  }
});

// handle withdraws
wdrForm.addEventListener("submit", function(ev){
  ev.preventDefault();

  const [accNum, wdrAmt] = ev.target;

  try{
    const result = Account.withdraw(accNum.value.trim(), wdrAmt.value.trim());
    if(result instanceof Error){
      throw result;
    }
    messages[3].classList.remove("inactive");
    messages[3].textContent = result;
    wdrForm.reset();
  }catch(err){
    messages[3].classList.remove("inactive");
    messages[3].textContent = err.message;
    wdrForm.reset();
  }
})

// handle money transfers
trnfForm.addEventListener("submit", function(ev){
  ev.preventDefault();

  const [accNum, destAccNum, trnfAmt] = ev.target;

  try{
    const result = Account.transfer(accNum.value.trim(), destAccNum.value.trim(), trnfAmt.value.trim());
    if(result instanceof Error){
      throw result;
    }
    messages[4].classList.remove("inactive");
    messages[4].textContent = result;
    trnfForm.reset();
  }catch(err){
    messages[4].classList.remove("inactive");
    messages[4].textContent = err.messages;
    trnfForm.reset();
  }
})

// handle transaction and balance checking
function dispTransBal(isLoggedIn = false, authCustAccNum="") {
  if (isLoggedIn && authCustAccNum) {
    try {
      const result = Account.checkTransactions(authCustAccNum);
      if (result instanceof Error) {
        throw result;
      } else {
        const table = document.createElement("table");
        table.setAttribute("class", "disp-trns");
        const tr0 = table.insertRow(0);
        const td0 = tr0.insertCell(0);
        td0.textContent = "sl. no.";
        const td1 = tr0.insertCell(1);
        td1.textContent = "Date";
        const td2 = tr0.insertCell(2);
        td2.textContent = "Dr.";
        const td3 = tr0.insertCell(3);
        td3.textContent = "Cr.";
        const td4 = tr0.insertCell(4);
        td4.textContent = "Balance";
        for (const [indx, trns] in result.transactions.entries()) {
          const tr = table.insertRow(indx + 1);
          const td0 = tr.insertCell(0);
          td0.textContent = indx;
          for (let i = 0; i < 5; i++) {
            const td = tr.insertCell(i + 1);
            td.textContent = Object.values(trns)[i]
              ? Object.values(trns)[i]
              : "";
            if (indx === result.transactions.length - 1 && i === 4) {
              td.textContent = result.balance;
            }
          }
        }
      }
    } catch (err) {
      messages[6].classList.remove("inactive");
      messages[6].textContent = err.message;
    }
  } else {
    window.location.href = "/";
  }
}