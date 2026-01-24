const root = document.querySelector("#root");

const h1 = document.createElement("h1");
h1.setAttribute("id", "message");
h1.textContent = "This text can be changed by typing in the input tag below and pressing the enter";
root.innerText = "";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "text-input");
input.setAttribute("placeholder", "write something and press enter...");

root.appendChild(h1);
root.appendChild(input);

input.addEventListener("change", function(){
  if(typeof input.value === "string"){
    h1.textContent = input.value;
    input.value = "";
  }else{
    h1.textContent = "*invalid input, please enter a text!";
  }
})