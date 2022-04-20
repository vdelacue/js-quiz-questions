// # Algorithms - Problem 1

// ## Add digits

// ### Instructions

// Given a number, add all of its digits. Continue to do so until the sum is one digit. Return the single digit.

// ### Example 
// Given the number 644, your function should return 5. 6 + 4 + 4 = 14. 1 + 4 = 5.

// Given the number 42, your function should return 6. 4 + 2 = 6. 

// Given the number 89657, your function should return 8. 8 + 9 + 6 + 5 + 7 = 35. 3 + 5 = 8.

const numerology = num => {
  let str = num.toString();

  while(str.length > 1){
    let sum = 0
    for(let i =0; i < str.length; i++){
    
     sum += parseInt(str[i]);
    }
    str = sum.toString();
  }
return parseInt(str);
}
// test with console.log(numerology(1112));

// # Algorithms -Problem 2

// ## Steps

// ### Instructions

// Given a number, create a staircase... The amount of steps should be that of the given number...

// A staircase is a series of console logs. Each step is represented by `#`s.

// For each step in the straircase, you must use spaces to take up the rest of the space created by the first step. 
//So if we are given the number eight, the last step (or the first we console log) will have one hash and seven spaces.

// ### Example

// Given the number 4, you should console.log:
// "#   "
// "##  "  
// "### "
// "####"

// Given the number 8, you should console.log:
// "#       "  
// "##      "
// "###     "
// "####    "
// "#####   "
// "######  "
// "####### "
// "########"

const steps = n => {
  for(var i = 1; i <= n; i++){
    let str = "\"";
    str += "#".repeat(i);
    str += " ".repeat(n-i);
    str += "\""
    console.log(str);
  }
}
const sergeySteps = n => {
  for(var i = 1; i <= n; i++){
    let str = '"';
    str += "#".repeat(i);
    str += " ".repeat(n-i);
    str += '"';
    console.log(str);
  }
}

console.log(sergeySteps(4));

// # Algorithms - Problem 3

// ## Chunkify

// ### Instructions

// Given An array and a number, 
//return an array containing several sub arrays, 
//each the size of the given number.

// ### Example

// Given [5,2,6,7,8,9,4,6,8] and 4, 
//you should return [[5,2,6,7], [8,9,4,6], [8]]

// Given [2,4,7,3,1,7,9,4,8,0,4,7,9,3,5,5,6,3,2,2,2,2,1] and 3, 
//you should return [[2,4,7], [3,1,7], [9,4,8], [0,4,7], [9,3,5], [5,6,3], [2,2,2], [2,1]]

// Given [1,2,3,4] and 2, 
//you should return [[1,2], [3,4]]


// # Callbacks - Problem 4

// ## Review

// ### Instructions

// _We will be reviewing callback functions in this activity. 
//You are given 4 helper functions that take in a number and then call on the callback functions given to it. 
//If it wasn't given a callback function then it will just console log the result of applying its assigned math to the argument._

// * You only need a single function call in order to complete each prompt
// and you won't need to define or use any values that aren't give to you. 

//For example, if you were given the number 8 as the variable `eight`, then you can console log the number 63 by
// > square(eight, subtractOne)

// The following four functions take in a number, apply some
// mathematical operation to it and then executes the first
// callback given to it with the number and the other callbacks
// as arguments. If it doesn't have any callbacks, it will
// simply return the value of the mathematical operation.


// This function adds two to the number argument passed to it
// and then calls on the first callback function it was passed
// with the new sum and the second and third callback function
// as arguments
function addTwo(num, callback1, callback2, callback3) {
    if (typeof callback1 === "function")
      callback1(num + 2, callback2, callback3);
    else
      console.log(num + 2);
  }
  // This function divides the number argument passed to it by 3
  // and then calls on the first callback function it was passed
  // with the new quotient and the second and third callback function
  // as arguments
  function divideThree(num, callback1, callback2, callback3) {
    if (typeof callback1 === "function")
      callback1(num / 3, callback2, callback3);
    else
      console.log(num / 3);
  }
  // This function squares the number argument passed to it
  // and then calls on the first callback function it was passed
  // with the new square and the second and third callback function
  // as arguments
  function square(num, callback1, callback2, callback3) {
    if (typeof callback1 === "function")
      callback1(num * num, callback2, callback3);
    else
      console.log(num * num);
  }
  // This function subtracts 1 from the number argument passed to it
  // and then calls on the first callback function it was passed
  // with the new value and the second and third callback function
  // as arguments
  function subtractOne(num, callback1, callback2, callback3) {
    if (typeof callback1 === "function")
      callback1(num - 1, callback2, callback3);
    else
      console.log(num  - 1);
  }
  
  var six = 6;
  // Using only the functions and the `six` variable given to you, console log 4
  // You will not have to use a function more than once and some might not be used
  //
  // You should only need one function call to complete this.
  // -------------------- Your Code Here --------------------
  divideThree(six, square);
  divideThree(six, addTwo);
  // -------------------- End Code Area ---------------------
  
  
  var four = 4;
  // (4 - 1)^2 + 2 = 11
  // Using only the functions and the `four` variable given to you, console log 11
  // You will not have to use a function more than once and some might not be used
  //
  // You should only need one function call to complete this.
  // -------------------- Your Code Here --------------------
  subtractOne(four, square, addTwo);
  // -------------------- End Code Area ---------------------
  
  
  var five = 5;
  // Using only the functions and the `five` variable given to you, console log 8
  // You will not have to use a function more than once and some might not be used
  //
  // You should only need one function call to complete this.
  // -------------------- Your Code Here --------------------
  square(five, subtractOne, divideThree);
  square(five, addTwo, divideThree, subtractOne);
  // -------------------- End Code Area ---------------------
  
















//HINTS for Callback Problem 4 -
// * (6 / 2) + 2 = 4

// * (4 - 1)^2 + 2 = 11

// * (5^2 + 2) / 3 - 1 = 8