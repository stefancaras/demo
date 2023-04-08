// Create a new folder for each section: e.g. Variables, Operators, Conditionals
//########################################################
// Variables
// Declare a variable named "myNumber" and assign it the value 42. Log the value of the variable to the console.
let myNumber = 42;
console.log(myNumber);
// Declare two variables named "firstNumber" and "secondNumber" and assign them the values 10 and 3, respectively. Divide "firstNumber" by "secondNumber" and assign the result to a new variable named "divisionResult". Log the value of "divisionResult" to the console.
let firstNumber = 10;
let secondNumber = 3;
let divisionResult = firstNumber / secondNumber;
console.log(divisionResult);
// Declare a variable named "myString" and assign it the value "Hello, world!". Log the value of the variable to the console.
let myString = "Hello, world!";
console.log(myString);
// Declare a variable named "isStudent" and assign it the value true. Log the value of the variable to the console.
let isStudent = true;
console.log(isStudent);
// Declare a variable named "myArray" and assign it an array with three string values: "apple", "banana", and "orange". Log the second element of the array to the console.
let myArray = ["apple", "banana", "orange"];
console.log(myArray[1]);
// Declare two variables named "numerator" and "denominator" and assign them the values 7 and 2, respectively. Divide "numerator" by "denominator" and assign the result to a new variable named "fraction". Log the value of "fraction" to the console.
let numerator = 7;
let denominator = 2;
let fraction = numerator / denominator;
console.log(fraction);
// Declare a variable named "noValue" and assign it the value null. Log the value of the variable to the console.
let noValue = null;
console.log(noValue);
// Declare a variable named "undefinedValue" without assigning a value to it. Log the value of the variable to the console.
let undefinedValue;
console.log(undefinedValue);
//########################################################
// Operators
// Declare a variable named "myNumber2" and assign it the value 5. Use a comparison operator to check if "myNumber2" is equal to 5, and log the result to the console.
let myNumber2 = 5;
console.log(myNumber2 === 5);
// Declare two variables named "firstNumber" and "secondNumber" and assign them the values 10 and 5, respectively. Use a comparison operator to check if "firstNumber" is greater than "secondNumber", and log the result to the console.
let firstNumber2 = 10;
let secondNumber2 = 3;
console.log(firstNumber2 > secondNumber2);
// Declare a variable named "myString" and assign it the value "Hello, world!". Use a comparison operator to check if "myString" is equal to "hello, world!" (in all lowercase letters), and log the result to the console.
let myString2 = "Hello, world!";
console.log(myString2 === "hello, world!");
// Declare a variable named "isStudent" and assign it the value true. Use a comparison operator to check if "isStudent" is equal to false, and log the result to the console.
let isStudent2 = true;
console.log(isStudent2 === false);
// Declare a variable named "myArray" and assign it an array with three string values: "apple", "banana", and "orange". Use a comparison operator to check if the length of "myArray" is greater than or equal to 3, and log the result to the console.
let myArray2 = ["apple", "banana", "orange"];
console.log(myArray2.length >= 3);
// Declare two variables named "numerator" and "denominator" and assign them the values 10 and 2, respectively. Use a comparison operator to check if "numerator" divided by "denominator" is equal to 5, and log the result to the console.
let numerator2 = 10;
let denominator2 = 2;
console.log(numerator2 / denominator2 === 5);
// Declare a variable named "undefinedValue" without assigning a value to it. Use a comparison operator to check if "undefinedValue" is equal to undefined, and log the result to the console.
let undefinedValue2;
console.log(undefinedValue2 === undefined);
// Declare a variable named "myNumber" and assign it the value 4. Multiply "myNumber" by itself and assign the result to a new variable named "squaredNumber". Log the value of "squaredNumber" to the console.
let myNumber3 = 4;
let squaredNumber = myNumber3 ** 2;
console.log(squaredNumber);
// Declare two variables named "firstNumber" and "secondNumber" and assign them the values 10 and 5, respectively. Subtract "secondNumber" from "firstNumber" and assign the result to a new variable named "difference". Log the value of "difference" to the console.
let firstNumber3 = 10;
let secondNumber3 = 5;
let difference = firstNumber3 - secondNumber3;
console.log(difference);
// Declare a variable named "myNumber" and assign it the value 7. Increment "myNumber" by 1 and log the result to the console.
let myNumber4 = 7;
console.log(++myNumber4);
// Declare two variables named "firstNumber" and "secondNumber" and assign them the values 2 and 4, respectively. Multiply "firstNumber" by 3 and then add "secondNumber" to the result. Assign the final result to a new variable named "finalResult" and log its value to the console.
let firstNumber4 = 2;
let secondNumber4 = 4;
let finalResult = firstNumber4 * 3 + secondNumber4;
console.log(finalResult);
// Declare a variable named "myNumber" and assign it the value 10. Decrement "myNumber" by 2 and log the result to the console.
let myNumber5 = 10;
console.log(myNumber5 - 2);
// Declare two variables named "numerator" and "denominator" and assign them the values 7 and 2, respectively. Use the remainder operator to find the remainder when "numerator" is divided by "denominator" and log the result to the console.
let numerator3 = 7;
let denominator3 = 2;
console.log(numerator3 % denominator3);
// Declare a variable named "number" and assign it the value 15. Use the modulo operator to find out if "number" is divisible by 3. Log the result to the console.
let number6 = 15;
console.log(number6 % 3 === 0);
// Declare a variable named "number" and assign it the value 28. Use the modulo operator to find out if "number" is even. Log the result to the console
let number7 = 28;
console.log(number7 % 2 === 0);
// Declare a variable named "number" and assign it the value 365. Use the modulo operator to find out the number of days left over after dividing "number" by 7. Log the result to the console.
let number8 = 365;
console.log(number8 % 7);
// Declare a variable named "number" and assign it the value 99. Use the modulo operator to find out if "number" is divisible by both 3 and 9. Log the result to the console.
let number9 = 99;
console.log(number9 % 3 === 0 && number9 % 9 === 0);
//########################################################
// Conditionals
// Declare a variable named "age" and assign it the value 18. Write an if-else statement to check if "age" is greater than or equal to 18. If it is, log "You are old enough to vote" to the console, otherwise log "You are not old enough to vote".
let age = 18;
if (age >= 18) console.log("You are old enough to vote");
else console.log("You are not old enough to vote");
// Declare a variable named "password" and assign it the value "open sesame". Write an if-else statement to check if "password" is equal to "open sesame". If it is, log "Access granted" to the console, otherwise log "Access denied".
let password = "open sesame";
if (password === "open sesame") console.log("Access granted");
else console.log("Access denied");
// Declare a variable named "numerator" and assign it the value 10. Declare another variable named "denominator" and assign it the value 0. Write an if-else statement to check if "denominator" is equal to 0. If it is, log "Cannot divide by zero" to the console, otherwise log the result of "numerator" divided by "denominator".
let numerator4 = 10;
let denominator4 = 0;
if (denominator4 === 0) console.log("Cannot divide by zero");
else console.log(numerator4 / denominator4);
// Declare a variable named "num" and assign it the value 7. Write an if-else statement to check if "num" is even. If it is, log "The number is even" to the console, otherwise log "The number is odd".
let num3 = 7;
if (num3 % 2 === 0) console.log("The number is even");
else console.log("The number is odd");
// Declare a variable named "score" and assign it the value 80. Write an if-else statement to check if "score" is greater than or equal to 90. If it is, log "A grade", else if it is greater than or equal to 80 log "B grade", else if it is greater than or equal to 70 log "C grade", else if it is greater than or equal to 60 log "D grade", otherwise log "F grade".
let score = 80;
if (score >= 90) console.log("A grade");
else if (score >= 80) console.log("B grade");
else if (score >= 70) console.log("C grade");
else if (score >= 60) console.log("D grade");
else console.log("F grade");
// Declare a variable named "temperature" and assign it a value. Write an if-else statement to check if "temperature" is greater than or equal to 20 and less than or equal to 30. If it is, log "The temperature is just right", otherwise log "The temperature is too high or too low".
let temperature = 10;
if (temperature >= 20 && temperature <= 30)
  console.log("The temperature is just right");
else console.log("The temperature is too high or too low");
// Declare a variable named "num" and assign it a value. Write an if-else statement to check if "num" is positive, negative, or zero. If it is positive, log "The number is positive", if it is negative log "The number is negative", otherwise log "The number is zero".
let num4 = 15;
if (num4 > 0) console.log("The number is positive");
else if (num4 < 0) console.log("The number is negative");
else console.log("The number is zero");
// Declare a variable named "hour" and assign it a value between 0 and 23. Write an if-else statement to check if "hour" is between 6 and 12. If it is, log "Good morning", otherwise log "Good afternoon".
let hour = 15;
if (hour > 6 && hour < 12) console.log("Good morning");
else console.log("Good afternoon");
// Declare a variable named "isRaining" and assign it a boolean value. Write an if-else statement to check if "isRaining" is true or false. If it is true, log "Bring an umbrella", otherwise log "No need for an umbrella".
let isRaining = false;
if (isRaining === true) console.log("Bring an umbrella");
else console.log("No need for an umbrella");
// Declare two variables named "num1" and "num2" and assign them values. Write an if-else statement to check if "num1" is greater than "num2". If it is, log "Num1 is greater than Num2", otherwise log "Num2 is greater than Num1".
let num11 = 12;
let num12 = 13;
if (num11 > num12) console.log("Num1 is greater than Num2");
else console.log("Num2 is greater than Num1");
//########################################################
// Switch case
// Write a switch case statement that checks the value of a variable dayOfWeek and prints a message indicating whether it is a weekday or a weekend day.
const dayOfWeek = "Sunday";
switch (dayOfWeek) {
  case "Monday":
    console.log("weekday");
    break;
  case "Tuesday":
    console.log("weekday");
    break;
  case "Wednesday":
    console.log("weekday");
    break;
  case "Thursday":
    console.log("weekday");
    break;
  case "Friday":
    console.log("weekday");
    break;
  case "Saturday":
    console.log("weekend");
    break;
  case "Sunday":
    console.log("weekend");
}
// Write a switch case statement that takes a number input monthNumber and returns the name of the corresponding month.
const monthNumber = 12;
switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
}
// Write a switch case statement that takes a variable fruit and assigns a value to the variable color depending on the fruit (e.g. "orange" should assign "orange" to the variable color).
const fruit = "orange";
let color;
switch (fruit) {
  case "orange":
    color = "orange";
    break;
  case "apple":
    color = "red";
    break;
  case "lemon":
    color = "yellow";
}
//########################################################
// Loops - while
// Write a while loop that prints the numbers from 1 to 10.
let x = 1;
while (x < 11) {
  console.log(x);
  x++;
}
// Write a while loop that prints the even numbers between 0 and 10.
let x2 = 0;
while (x2 < 11) {
  if (x2 % 2 === 0) console.log(x2);
  x2++;
}
// Write a while loop that calculates the sum of the numbers from 1 to 100.
let sum = 0;
let i = 1;
while (i < 101) {
  sum += i;
  i++;
}
console.log(sum);
// Write a while loop that prints the first 10 numbers of the Fibonacci sequence. The first two numbers in the sequence are 0 and 1, and each subsequent number is the sum of the two preceding numbers.
const array = [0, 1];
let j = 0;
while (j < 10) {
  if (j > 1) array.push(array[j - 2] + array[j - 1]);
  console.log(array[j]);
  j++;
}
// Write a while loop that prints the multiplication table of a given number, from 1 to 10.

// Write a while loop that prompts the user to enter a positive integer and calculates its factorial.
// Write a while loop that generates and prints 10 random numbers between 0 and 100.
// Write a while loop that calculates the sum of the digits of a given number.
// Write a while loop that prompts the user to enter a number and prints "Even" if the number is even and "Odd" if the number is odd. The loop should continue until the user enters 0.
// Write a while loop that calculates and prints the sum of the digits of a given number, until the sum becomes a single digit.
//########################################################
// Loops - for
// Write a for loop that prints the numbers from 1 to 10.
// Write a for loop that prints the even numbers from 2 to 20.
// Write a for loop that prints the numbers from 10 to 1.
// Write a for loop that calculates and prints the factorial of a given number.
// Write a for loop that prints the multiplication table of a given number, from 1 to 10.
// Write a for loop that calculates and prints the sum of the even numbers between 1 and a given number.
// Write a for loop that generates and prints 10 random numbers between 0 and 100.
// Write a for loop that prints a right triangle of stars, with the number of rows specified by the user.
// Write a for loop that prints the reverse of a given string.
// Write a for loop that prints all the elements of an array.
// Write a for loop that calculates and prints the sum of all the elements in an array.
// Write a for loop that finds and prints the maximum element in an array.
// Write a for loop that creates a new array with all the even elements of an existing array.
// Write a for loop that sorts an array of numbers in ascending order (using a simple bubble sort algorithm).
