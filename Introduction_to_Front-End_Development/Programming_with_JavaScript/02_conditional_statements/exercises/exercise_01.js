/*
  1. Declare a variable age using the var keyword and set it to the number 10.

  2. Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension". (We will be using console.log throughout the code to display output in the console, helping to show the results of conditions and track the program's behavior during execution.)

  3. Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

  4. Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, type "console.log" and then "You get an allowance".

  5. Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".
*/

var age = 40;

if(age >= 65){
  console.log("You get your income from your pension");
}else if(age >= 18 && age < 65){
  console.log("Each month you get a salary");
}else if(age < 18){
  console.log("You get an allowance");
}else{
  console.log("The value of the age variable is not numerical");
}

/*
  1. On the next line, define a new variable, name it day, and set its value to "Sunday".

  2. Start coding a switch statement, passing the day variable as the expression to evaluate.

  3. Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

  4. At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

  5. Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.
*/

var day = "Sunday";

switch(day){
  case "Monday":
    console.log("Start learning the Programming with JavaScript course from Meta");
    break;
  case "Tuesday":
    console.log("Continue with the same");
    break;
  case "Wednessday":
    console.log("Take a short test");
    break;
  case "Thursday":
    console.log("Again start learning a new topic");
    break;
  case "Friday":
    console.log("Continue the new topic and practice more");
    break;
  case "Saturday":
    console.log("Take a short test");
    break;
  case "Sunday":
    console.log("Do a project based on the topics you have completed");
    break;
  default:
    console.log("There is no such day");
}