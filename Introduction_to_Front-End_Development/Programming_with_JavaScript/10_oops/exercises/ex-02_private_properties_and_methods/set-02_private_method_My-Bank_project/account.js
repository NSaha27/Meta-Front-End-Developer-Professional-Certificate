"use strict";

const Customer = require("customer.js");

/*
ACCOUNT FORMAT
--------------
{
  accountNum: {
    transactions: [
      {dt: "", dr: 0, cr: 0},
      {dt: "", dr: 0, cr: 0}
    ],
    balance: 0,
  }
}
*/

const accounts = {};

class Account extends Customer{
  static #validateAccNum(accNum){
    const regexp = /^402310\d{9}$/;
    return regexp.test(accNum);
  }
  static #validateAmount(amt){
    const regexp = /^(?:0|[1-9]\d*)(?:\.\d+)?$/;
    return regexp.test(amt);
  }
  #generateAccNum(){
    let accNo = "402310";
    const remNum = "";
    while(remNum.length <= 9){
      const randNum = Math.floor(Math.random() * 9 + 1);
      remNum += randNum;
    }
    return accNo.concat(remNum); 
  }

  constructor(custID, custName, custAadhaar, custAddress, custPhone, custEmail, custPsw, accOpenMoney){
    super(custID, custName, custAadhaar, custAddress, custPhone, custEmail, custPsw);
    this.accNum = this.#generateAccNum();
    this.accOpenMoney = accOpenMoney
  }

  // perform account initialization operation
  addInitialAcc(){
    const isValidAccNum = Account.#validateAccNum(this.accNum);
    const isValidAccOpenMoney = Account.#validateAmount(this.accOpenMoney);
    if(!isValidAccNum)
      throw new Error("*** invalid account number !");
    if(!isValidAccOpenMoney)
      throw new Error("*** invalid account opening money !");
    
    const accExists = Object.keys(accounts).indexOf(this.accNum);
    if(accExists !== -1){
      throw new Error("*** account already exists !");
    }else{
      const result = super.saveCustDetails();
      if(typeof result !== "boolean")
        throw result;
      Object.assign(accounts, {
        [this.accNum]: {
          transactions: [
            {dt: new Date().toLocaleDateString(), dr: 0, cr: this.accOpenMoney}
          ],
          balance: this.accOpenMoney
        }
      });
      return `*** Account was created successful, your account number is <strong>${this.accNum}</strong>`;
    }
  }

  // perform deposit operation
  static deposit(accNum, amount){
    const isValidAccNum = Account.#validateAccNum(accNum);
    const isValidAmt = Account.#validateAmount(amount);
    if(!isValidAccNum)
      throw new Error("*** invalid account number !");
    if(!isValidAmt)
      throw new Error("*** invalid amount !");

    const accExists = Object.keys(accounts).indexOf(accNum);
    if(accExists === -1){
      throw new Error("*** no such account exists!");
    }else{
      const newTransactionList = [...accounts[accNum].transactions];
      newTransactionList.push({dt: new Date().toLocaleDateString(), dr: 0, cr: amount});
      const newBalance = accounts[accNum].balance + amount;
      Object.assign(accounts, {
        [accNum]: {
          transactions: newTransactionList,
          balance: newBalance
        }
      });
      return `Rs.${amount}/- has been credited to the account XXXXXXXXXXXX${accNum.slice(10, 15)}, current balance is Rs.${newBalance}/-`;
    }
  }

  // perform withdraw operation
  static withdraw(accNum, amount){
    const isValidAccNum = Account.#validateAccNum(accNum);
    const isValidAmt = Account.#validateAmount(amount);
    if(!isValidAccNum)
      throw new Error("*** invalid account number !");
    if(!isValidAmt)
      throw new Error("*** invalid amount !");

    const accExists = Object.keys(accounts).indexOf(accNum);
    if(accExists === -1){
      throw new Error("*** no such account exists !");
    }else{
      if(amount > accounts[accNum].balance)
        throw new Error("*** insufficient balance to make this transaction !");
      const newTransactionList = [...accounts[accNum].transactions];
      newTransactionList.push({dt: new Date().toLocaleDateString(), dr: amount, cr: 0});
      const newBalance = accounts[accNum].balance - amount;
      Object.assign(accounts, {
        [accNum]: {
          transactions: newTransactionList,
          balance: newBalance
        }
      });
      return `Rs.${amount}/- has been debited from the account XXXXXXXXXXX${accNum.slice(11, 15)}, current balance is Rs.${newBalance}/-`;
    }
  }

  // perform money transfer operation
  static transfer(srcAccNum, destAccNum, amount){
    const isValidSrcAccNum = Account.#validateAccNum(srcAccNum);
    const isValidDestAccNum = Account.#validateAccNum(destAccNum);
    const isValidAmt = Account.#validateAmount(amount);
    if(!isValidSrcAccNum)
      throw new Error("*** invalid account(source) number !");
    if(!isValidDestAccNum)
      throw new Error("*** invalid account(destination) number !");
    if(!isValidAmt)
      throw new Error("*** invalid amount !");

    const srcAccExists = Object.keys(accounts).indexOf(srcAccNum);
    const destAccExists = Object.keys(accounts).indexOf(destAccNum);
    if(srcAccExists === -1){
      throw new Error("*** no such account(source) exists !");
    }
    if(destAccExists === -1){
      throw new Error("*** no such account(destination) exists !");
    }

    if(amount > accounts[srcAccNum].balance)
      throw new Error("*** insufficient balance to make this transaction !");
    const newSrcTransactionList = [...accounts[srcAccNum].transactions];
    const transactionDate = new Date().toLocaleDateString();
    newSrcTransactionList.push({dt: transactionDate, dr: amount, cr: 0});
    const newSrcBalance = accounts[srcAccNum].balance - amount;
    Object.assign(accounts, {
      [srcAccNum]: {
        transactions: newSrcTransactionList,
        balance: newSrcBalance
      }
    });
    const newDestTransactionList = [...accounts[destAccNum].transactions];
    newDestTransactionList.push({dt: transactionDate, dr: 0, cr: amount});
    const newDestBalance = accounts[destAccNum].balance + amount;
    Object.assign(accounts, {
      [destAccNum]: {
        transactions: newDestTransactionList,
        balance: newDestBalance
      }
    });
    return `Rs.${amount}/- has been debited from the account XXXXXXXXXXX${srcAccNum.slice(11, 15)}, current balance is Rs.${newSrcBalance}/-`;
  }

  // perform transaction check operation
  static checkTransactions(accNum){
    const isValidAccNum = Account.#validateAccNum(accNum);
    if(!isValidAccNum)
      throw new Error("*** invalid account number !");

    const accExists = Object.keys(accounts).indexOf(accNum);
    if(accExists === -1){
      throw new Error("*** no such account exists !");
    }
    return accounts[accNum];
  }
}

module.exports = Account;