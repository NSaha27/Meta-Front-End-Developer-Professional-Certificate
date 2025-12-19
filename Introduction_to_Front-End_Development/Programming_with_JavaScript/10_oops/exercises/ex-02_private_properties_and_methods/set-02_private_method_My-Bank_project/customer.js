"use strict";

// SAVE CUSTOMER AND ACCOUNT DETAILS
const customers = [];

// DEFINING CUSTOMER CLASS
class Customer {
  #custID;
  #custName;
  #custAadhaar;
  #custAddress;
  #custPhone;
  #custEmail;
  #custPsw;

  // data validation private methods
  #validateCustID(ID){
    const regexp = /^[A-Za-z0-9]+$/g;
    return regexp.test(ID);
  }
  #validateCustName(name){
    const regexp = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
    return regexp.test(name);
  }
  #validateCustAadhaar(aadhaar){
    const regexp = /^(?:\d{12}|\d{4}(?: \d{4}){2}|\d{4}(?:-\d{4}){2})$/;
    return regexp.test(aadhaar);
  }
  #validateCustAddress(address){
    const regexp = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    return regexp.test(address);
  }
  #validateCustPhone(phone){
    const regexp = /^(\+\d{1,3})?\d{10}$/;
    return regexp.test(phone);
  }
  #validateCustEmail(email){
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
  }
  #validateCustPassword(psw){
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return regexp.test(psw);
  }

  constructor(custID, custName, custAadhaar, custAddress, custPhone, custEmail, custPsw){
    this.#custID = this.#validateCustID(custID) ? custID : "";
    this.#custName = this.#validateCustName(custName) ? custName : "";
    this.#custAadhaar = this.#validateCustAadhaar(custAadhaar) ? custAadhaar : "";
    this.#custAddress = this.#validateCustAddress(custAddress) ? custAddress : "";
    this.#custPhone = this.#validateCustPhone(custPhone) ? custPhone : "";
    this.#custEmail = this.#validateCustEmail(custEmail) ? custEmail : "";
    this.#custPsw = this.#validateCustPassword(custPsw) ? custPsw : "";
  }
  saveCustDetails(){
    if(this.#custID.length === 0)
      throw new Error("*** invalid customer ID!");
    if(this.#custName.length === 0)
      throw new Error("*** invalid name!");
    if(this.#custAadhaar.length === 0)
      throw new Error("*** invalid Aadhaar number!");
    if(this.#custAddress.length === 0)
      throw new Error("*** invalid address!");
    if(this.#custPhone.length === 0)
      throw new Error("*** invalid phone number!");
    if(this.#custEmail.length === 0)
      throw new Error("*** invalid email address!");
    if(this.#custPsw.length === 0)
      throw new Error("*** invalid password!");


    const data = {
      ID: this.#custID,
      name: this.#custName,
      aadhaar: this.#custAadhaar,
      address: this.#custAddress,
      phone: this.#custPhone,
      email: this.#custEmail,
      password: this.#custPsw
    };

    // if there is no error, try to save the data
    customers.push(data);
    return true;
  }
  static fetchCustDetails(custID, custPsw){
    const custIDRegexp = /^[A-Za-z0-9]+$/g;
    const custPswRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if(!custIDRegexp(custID) || !custPswRegexp(custPsw)){
      return {};
    }
    const fetchedCust = customers.find((cust, indx, arr) => cust.ID === custID && cust.password === custPsw);
    return fetchedCust;
  }
}

module.exports = Customer;