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
  // Only change code below this line
  // arr.push(item);
  // return arr.shift();
  // Only change code above this line
// };
// nextInLine([1, 3, 7], 5);
 // console.log(nextInLine([1, 2, 3, 4, 5], 7));
// console.log(nextInLine.length);

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

function myFun() {
  console.log("Hello");
   return "World";// The string byebye will never display in the console, because the function exits at the return statement.
  console.log("byebye")
}
myFun();
