// USE OF FACTORY FUNCTION IN OOPs

// A Factory Function is a function that returns an object

// Without prototype functions
function Person(name, age=18, position="defender", contactNumber=null){
  return {
    name,
    age,
    position,
    contactNumber,
    getPersonalDetails(){
      return `Name : ${name}
      Age : ${age}
      Playing position : ${position}
      Contact number : ${contactNumber}`;
    }
  }
}

function Player(name, age, position, contactNumber, DOJ, salary){
  const person = Person(name, age, position, contactNumber);
  return Object.assign({}, person, {
    DOJ,
    salary,
    getProfessionalDetails(){
      return `Date of joining the club : ${DOJ}
      Salary(in $) : ${salary}`;
    }
  });
}

const samad = Player("Abdul Samad", 28, "defensive mid-field", "8749526443", "2023-09-12", 1100000);
console.log(samad);
