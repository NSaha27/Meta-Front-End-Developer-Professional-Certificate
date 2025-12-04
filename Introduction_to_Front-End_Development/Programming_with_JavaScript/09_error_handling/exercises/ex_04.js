function addTwoNums(a, b) {
  try {
    if(typeof a !== "number") {
      throw new ReferenceError("The first argument is not a number.");
    }else if(typeof b !== "number") {
      throw new ReferenceError("The second argument is not a number.");
    }else {
      console.log(a + b);
    }
  }catch(err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");
console.log("It still works");

function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    var message = "%c" + txt;

    // Declare a variable for the style
    var style = `color: ${color}`;

    // Append background style to the style variable
    style += `background: ${background};`;

    // Append font size style to the style variable
    style += `font-size: ${fontSize};`;

    // Log the message with the applied style
    console.log(message, style);
}

function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if(reason === "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  }else if(reason === "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  }else {
    console.log(message, fontStyle);
  }
}

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');

celebrateStyler('birthday');


function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');