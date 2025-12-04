/*
  HANDLE USER INPUTS AND ERRORS CORRESPONDING TO IT
*/

const formElm = document.getElementById("regForm");
const displayRegForm = document.getElementById("displayRegForm");
const displayLoginForm = document.getElementById("displayLoginForm");

formElm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  try {
    const username = ev.target[0].value.trim();
    const firstName = ev.target[1].value.trim();
    let middleName = ev.target[2].value.trim();
    const lastName = ev.target[3].value.trim();
    const aadhar = ev.target[4].value.trim();
    const address = ev.target[5].value.trim();
    const phone = ev.target[6].value.trim();
    const email = ev.target[7].value.trim().toLowerCase();
    const password = ev.target[8].value.trim();

    const usernameRegexp = /^[A-Z0-9]+$/g;
    const firstnameRegexp = /^[A-Za-z]+$/;
    const middlenameRegexp = /^([A-Za-z]\.?)*$/;
    const lastnameRegexp = /^[A-Za-z]+$/;
    const aadharRegexp = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
    const addressRegexp = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    const phoneRegexp = /^(\+\d{1,3})?\d{10}$/;
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if(usernameRegexp.test(username) === false){
      throw new Error("*invalid username!");
    }
    if(firstnameRegexp.test(firstName) === false){
      throw new Error("*invalid first name!");
    }
    if(middlenameRegexp.test(middleName) === false){
      throw new Error("*invalid middle name!");
    }
    if(lastnameRegexp.test(lastName) === false){
      throw new Error("*invalid last name!");
    }
    if(aadharRegexp.test(aadhar) === false){
      throw new Error("*invalid aadhar number!");
    }
    if(addressRegexp.test(address) === false){
      throw new Error("*invalid address!");
    }
    if(phoneRegexp.test(phone) === false){
      throw new Error("*invalid phone number!");
    }
    if(emailRegexp.test(email) === false){
      throw new Error("*invalid email ID!");
    }
    if(passwordRegexp.test(password) === false){
      throw new Error("*invalid password!");
    }

    middleName = middleName ? " " + middleName : "";

    console.log(`Username : ${username}
    Name : ${firstName}${middleName} ${lastName}
    AADHAR : ${aadhar}
    Address : ${address}
    Phone no. : ${phone}
    Email : ${email}`);

    displayRegForm.style.display = "none";
    displayLoginForm.style.display = "block";
  }catch(err) {
    console.error(`Error message: ${err.message}`);
    console.error(err.stack);
  }
})