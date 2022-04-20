//Question 1:
//What would be the result of 1 + 2 + '3' be in javascript? why?
const result = 1 + 2 + '3';
//3 + '3'
//'3' + '3'
//'33'
//console.log(result); // '33'

//What is destructuring assignment?
//The destructuring assignment is a JavaScript expression
//that makes it possible to unpack values from arrays or properties from objects into distinct variables.
// Let's get the month values from an array using destructuring assignment
var [three, two, one] = ['JAN', 'FEB', 'MARCH'];

// console.log(one); // 'March'
// console.log(two); // 'Feb'
// console.log(three); //'Jan'

//and you can get user properties of an object using destructuring assignment,

const {name, age} = {name: 'John', age: 32};

//console.log(name); 
//console.log(age); 

//Question 2:
//What will the outcome be of the console.logs bellow:
let x, y, z;

[x=2, y=4, z=6] = [10];

//console.log(x); 
//console.log(y); 
//console.log(z); 

//Question 3:
//What will the outcome be of the console.logs bellow:
let {a=5, b=6, c=7} = {a: 8};

// console.log(a); 
// console.log(b); 
// console.log(c); 

//Question 4:
//What will the outcome be of the console.logs bellow:
let h = 10, i = 20;

[h, i] = [i, h];
// console.log(h);
// console.log(i); 

//Question 5:
//What will the outcome be of the console.log bellow:
const myMultiArray = 
[
    [1, 2, 3, 4, 5, [1, 2, 3, 4, 5] ],

    [6, 7, 8, 9, 10, [1, 2, 3, 4, 6] ],

    [11, 12, 13, 14, 15, [1, 2, 3, 4, 5] ],
    
    [16, 17, 18, 19, 20, [1, 2, 3, 4, 5] ]
];

//console.log(myMultiArray[1][5][4]);
//console.log(myMultiArray[5]);
//console.log(myMultiArray[3]);
//console.log(myMultiArray[3][4]);


//Answer 1:
// The output is going to be 33.
// Since 1 and 2 are numeric values, the result of the first two digits is going to be a numeric value 3.
// The next digit is a string type value
// because of that the addition of numeric value 3 and string type value 3
// is just going to be a concatenation value 33.

//Answer 2:
//console.log(x); // 10
//console.log(y); // 4
//console.log(z); // 6
//the array is declared as [x,y,z] and assignment is destructured for x to be ten,
// the other vaiables 'y' and 'z' have not been given values
// but they do have default values in case non are assigned.

//Answer 3:
// console.log(a); //8
// console.log(b); //6
// console.log(c); //7

//Answer 4:
// console.log(h); // 20
// console.log(i); // 10
// If you don't use destructuring assignment, swapping two values requires a temporary variable.
// Whereas using a destructuring feature, two variable values can be swapped in one destructuring expression.
// In this question we swap two number variables in array destructuring assignment.

//Answer 5:
// Outputs 6,
// looks at array at index one,
// then the 5th element in that array is another array
// and the 4th element in this array is the number 6

//**** cool fact there is a double NOT bitwise operator.
// It is used as a faster substitute for Math.floor(). ~~
// However does not work on negative numbers use with caution

//SUPER HARD BONUS
//WHAT IS GOING ON HERE! see if you can find out what is happening...
//console.log([1,2] + [3,4]); //'1,23,4'
//console.log( [1,2] + [5,6,7][1,2]); //'1,27'
//console.log([5,6,7][1,2]); // 7
//console.log(['French Roast', 'Colombian', 'Kona']['1', '2']); //
//console.log(['French Roast', 'Colombian', 'Kona']['1', 'Kona', true, 0]);
console.log(['French Roast', 'Colombian', 'Kona']['1', 'Kona', true, 0, 'Columbian']);

//SUPER HARD BONUS answer
//outputs in order:
// '1,23,4'
// '1,27'
// 7  //NOTE THAT THIS IS A NUMBER NOT A STRING
// 'Kona'
// 'French Roast'
// undefined

//JavaScript's + operator has two purposes:
// adding two numbers, or joining two strings.
// It doesn't have a specific behaviour for arrays,
//The + operator is not defined for arrays.
//What happens is that Javascript converts arrays into strings and concatenates those.
// so it's converting them to strings and then joining them.
//The last console.log gets read like this:
//[1,2] + [3,4]
//'1,2' + '3,4' //converts to string
//1,23,4 //concats string to give output
//

//tricky question of [5,6,7][1,2]
// The comma operator evaluates both of its operands (from left to right)
// and returns the value of the second operand. It keeps going all the way until the last one so it returns 2
// therefore the evaluation happens like this
//[5,6,7][1,2]
//[5,6,7][2]
//element at index 2 is 7
