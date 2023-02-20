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

function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return 'Tiny';

} else if (num < 10) {
  return 'Small';

} else if (num < 15) {
  return 'Medium'

} else if (num < 20) {
  return 'Large'

} else if (num >= 20) {
  return 'Huge'

} else {
  return "Change Me";
}


  // return "Change Me";
  // Only change code above this line
};

testSize(17);