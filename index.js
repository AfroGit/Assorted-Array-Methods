/*The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array */ 
// const dogArray = ['Bark', 'Beep', 'Boop'];
// console.log(dogArray.unshift('Fido', 'Zimba'));  //method always has a call on it that returns the length of the array.
// console.log(dogArray);

// ----------------------------------------------------

/*

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
 */ 

// function nextInLine(arr, item) {
 
//   arr.push(item);
//   return arr.shift();
  
// };
// // nextInLine([1, 3, 7], 5);
//   console.log(nextInLine([1, 2, 3, 4, 5], 7));
//  // console.log(nextInLine.length);

// -----------------------------------------------------

// function testSize(num) {
//   // Only change code below this line
// if (num < 5) {
//   return 'Tiny';

// } else if (num < 10) {
//   return 'Small';

// } else if (num < 15) {
//   return 'Medium'

// } else if (num < 20) {
//   return 'Large'

// } else if (num >= 20) {
//   return 'Huge'

// } else {
//   return "Change Me";
// }


//   // return "Change Me";
//   // Only change code above this line
// };

// testSize(17);

// ---------------------------------------------------
/*In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest): */ 

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
// if (strokes == 1 ){
//   return names[0]
//   } else if (strokes <= par -2){
//    return names[1]
//   } else if (strokes == par -1){
//    return names[2]
//   } else if (strokes == par){
//     return names[3]
//   } else if (strokes == par + 1){
//     return names[4]
//   }else if(strokes == par + 2){
//     return names[5]
//   } else if(strokes >= par + 3){
//     return names[6]
//   } else {return "Change Me";}

//   // return "Change Me";
//   // Only change code above this line
// }

// console.log(golfScore(5, 2));

// -----------------------------------------------

// function myFun() {
//   console.log("Hello");
//    return "World";// The string byebye will never display in the console, because the function exits at the return statement.
//   console.log("byebye")
// }
// myFun();

// -----------------------------------------------------
/*In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. */ 
// let count = 0;

// function cc(card) {
//   // Only change code below this line
// switch(card){

// case 2:
// case 3:
// case 4:
// case 5:
// case 6:
// count++;
// break;

// case 10:
// case 'J':
// case 'Q':
// case 'K':
// case 'A':
// count--;
// break;

// }
// if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";

// }
//   /* 
//     cc(2); runs.
//     The switch statement hits case 2, jumps down and adds 1 to the variable count.
//     The switch statement then hits the break and cc(3); runs.
//     This cycle continues until the final call is made, cc('A');.
//     After the switch statement, the if statement checks count, which is now 0.
//     This then drops down to the else statement, which will return 0 Hold.*/

// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(7));

// -------------------------------------------____________

/*Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.*/ 

// let fixedValue = 4;

// function incrementer() {
//  return fixedValue + 1;
// };
// var newValue = incrementer(); // Should equal 5
// console.log(fixedValue); // Should print 4
// console.log(newValue);

// --------------------------------------------------
/*defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order. */ 

function mixedNumbers(arr) {
 
   arr.unshift('I', 2, 'three');
   arr.push(7, 'VIII', 9);
  
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));