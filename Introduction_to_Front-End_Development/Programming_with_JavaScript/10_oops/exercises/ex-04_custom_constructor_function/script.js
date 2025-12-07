/*
  CUSTOM CONSTRUCTOR FUNCTION
  ---------------------------

  Q. What is a constructor function?
  A. A constructor function is a special type of function that is used to create an instance of an object.

*/

const employees = [];

function Employee(empID, empName, empSex, empQlf, empAddr, empPhn, empEml, empDesg){
  this.empID = empID;
  this.empName = empName;
  this.empSex = empSex;
  this.empQlf = empQlf;
  this.empAddr = empAddr;
  this.empPhn = empPhn;
  this.empEml = empEml;
  this.empDesg = empDesg;
  this.saveEmpData = function(){
    const empData = {
      ID: this.empID,
      name: this.empName,
      sex: this.empSex,
      qualification: this.empQlf,
      address: this.empAddr,
      phone: this.empPhn,
      email: this.empEml,
      designation: this.empDesg
    };
    try{
      employees.push(empData);
      console.log("*** employee details were saved successfully!");
    }catch(err){
      console.log("*** unable to save employee details!");
      console.error(err.stack);
    }
  }
}

const employee101 = new Employee(101, "Rajesh Srivastava", "male", "B.Tech(elec)", "Jamuna Nagar, Noida, UP", "+917942563018", "rajesh.srivastava23@example.com", "jr. software developer");
const employee102 = new Employee(102, "Sakshi Jain", "female", "BCA", "Ganguly Bagan Lane, Patuli, Kolkata, WB", "+918420529107", "sakshi.jain3010@example.com", "automation tester");

employee101.saveEmpData();
employee102.saveEmpData();

console.log(employees);