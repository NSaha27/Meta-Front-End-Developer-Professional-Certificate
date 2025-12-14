// USING PROTOTYPE TO REDUCE MEMORY, CREATED FOR INSTANCE PROPERTIES AND METHODS

// Without prototype
/*
function Person(ssn, firstname, lastname, sex="male", contactnumber=null, contactemail=null){
  this.ssn = ssn;
  this.firstname = firstname;
  this.lastname = lastname;
  this.sex = sex;
  this.contactnumber = contactnumber;
  this.contactemail = contactemail;
  this.getContactDetails = function(){
    return `Name : ${this.firstname} ${this.lastname}
    Phone number : ${this.contactnumber}
    Email ID     : ${this.contactemail}`;
  }
}

const gaurav = new Person("102356478903", "Gaurav Kumar", "Yadav", "male", "+918747524302", "gaurav.yadav32@example.com");

console.log(gaurav);
*/

// With prototype
function Person(ssn, firstname, lastname, sex="male", contactnumber=null, contactemail=null){
  this.ssn = ssn;
  this.firstname = firstname;
  this.lastname = lastname;
  this.sex = sex;
  this.contactnumber = contactnumber;
  this.contactemail = contactemail;
}

Person.prototype.getContactDetails = function(){
    return `Name : ${this.firstname} ${this.lastname}
    Phone number : ${this.contactnumber}
    Email ID     : ${this.contactemail}`;
  }

const gaurav = new Person("102356478903", "Gaurav Kumar", "Yadav", "male", "+918747524302", "gaurav.yadav32@example.com");

console.log(gaurav);
console.log(gaurav.getContactDetails());