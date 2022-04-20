//console.log([9,9] + [3,4]);
//console.log("9,9" + "3,4");
console.log([8,8][3,4,5,0]);
//This is how line 3 gets interpretted by javascript engine: (comma has functionality)
// [8,8][3,4,5,0]
// [8,8][4,5,0]
// [8,8][5,0]
// [8,8][0]
//console.log([3,4,5][1,2]);
//console.log(['French Roast', 'Colombian', 'Kona']['1', '2']);
//console.log(['French Roast', 'Colombian', 'Kona']['1', 'Kona', true, 0]);
//console.log(['French Roast', 'Colombian', 'Kona']['1', 'Kona', true, null, [8,8][3,4,5][1,2], 0, 'Columbian']);


//**** cool fact there is a double NOT bitwise operator.
// It is used as a faster substitute for Math.floor(). ~~
// However does not work on negative numbers use with caution

//SUPER HARD BONUS
//WHAT IS GOING ON HERE! see if you can find out what is happening...
console.log([1,2] + [3,4]);
console.log( [1,2] + [5,6,7][1,2]);
console.log([5,6,7][1,2]);
console.log(['French Roast', 'Colombian', 'Kona']['1', '2']);
console.log(['French Roast', 'Colombian', 'Kona']['1', 'Kona', true, 0]);
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
