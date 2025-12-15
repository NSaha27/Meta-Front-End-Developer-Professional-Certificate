// PRIVATE PROPERTIES

const users = [];

class User{
  #username;
  #name;
  #aadhar;
  #phone;
  #email;
  #password;

  constructor(username, name, aadhar, phone, email, password){
    this.#username = username;
    this.#name = name;
    this.#aadhar = aadhar;
    this.#phone = phone;
    this.#email = email;
    this.#password = password;
  }

  registerUser(){
    try{
      const user = {
        username: this.#username,
        name: this.#name,
        aadhar: this.#aadhar,
        phone: this.#phone,
        email: this.#email,
        password: this.#password
      };
      users.push(user);
      return `*** user registration is successful with the username "${this.#username}"`;
    }catch(err){
      throw new Error("*** unable to register the user, error:", err.message);
    }
  }

  static fetchUser(uname, psw){
    const userFound = users.find((user) => user.username === uname && user.password === psw);
    if(userFound){
      return userFound;
    }else{
      return {};
    }
  }
}

// display or hide a form
const dispRegForm = document.querySelector(".disp-reg-form");
const dispLoginForm = document.querySelector(".disp-login-form");
const dispHomePage = document.querySelector(".disp-home-page");

// accessing forms
const registrationForm = document.querySelector(".regForm");
const loginForm = document.querySelector(".loginForm");

const homePageTitle = document.querySelector(".page-title");

// Handle Registration Form Submission
registrationForm.addEventListener("submit", function(event){
  event.preventDefault();

  // accept form data
  const username = event.target[0].value.trim();
  const name = event.target[1].value.trim();
  const aadhar = event.target[2].value.trim();
  const phone = event.target[3].value.trim();
  const email = event.target[4].value.trim();
  const password = event.target[5].value.trim();

  try{
    const newUser = new User(username, name, aadhar, phone, email, password);
    const result = newUser.registerUser();
    console.log(result);
    // console.log(newUser.username); // undefined (As it is a private property)
    dispRegForm.classList.remove("active");
    dispRegForm.classList.add("inactive");
    dispLoginForm.classList.remove("inactive");
    dispLoginForm.classList.add("active");
  }catch(err){
    registrationForm.reset();
    console.error(err.message);
  }
});

loginForm.addEventListener("submit", function(ev){
  ev.preventDefault();

  // accept form data
  const username = ev.target[0].value.trim();
  const password = ev.target[1].value.trim();
  
  try{
    const result = User.fetchUser(username, password);
    if(Object.values(result).length > 0){
      dispLoginForm.classList.remove("active");
      dispLoginForm.classList.add("inactive");
      dispHomePage.classList.add("active");
      dispHomePage.classList.remove("inactive");
      homePageTitle.textContent = `Log in successful, welcome to home page Mr./Ms. ${result.name}!`;
    }else{
      loginForm.reset();
    }
  }catch(err){
    console.error(err.message);
  }
})
