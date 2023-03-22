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
/*Define a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order. */ 

// function mixedNumbers(arr) {
 
//    arr.unshift('I', 2, 'three');
//    arr.push(7, 'VIII', 9);
  
//   return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));
// --------------------------------------------------

/*Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10. */ 

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];

// let sumArray = arr.splice(1, 4);

// console.log(arr);

// -----------------------------------------------------
/*Define a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places. */ 

// function htmlColorNames(arr) {
 
//   arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond' )
  
//   return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//------------__________-----------------____________---- 
/* defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny. */ 

// function forecast(arr) {
  
//     return arr.slice(2, 4);
// };

// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// --------------------------------------------------
 // let thisArray = [true, true, undefined, false, null];
 // let thatArray = [...thisArray];// use the spread operator
 //  console.log(thatArray);
// ---------------------------------------------------
// --------------------------------------------------------
/*Define a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!). */ 

// function copyMachine(arr, num){
// let newArray = [];
//   while(num >= 1){
  
//     newArray.push([...arr])
//     num--;
//   }
//   return newArray
// };
// console.log(copyMachine([true, false, true], 2));

// ----------------------------------------------------

/* defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun']. */ 


// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ... fragment, 'is', 'fun']; // Change this line
//   return sentence;
// }

// console.log(spreadOut());

// -----------------------------------------------
/* Define a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not. */ 


// function quickCheck(arr, elem) {
 
//    if(arr.indexOf(elem) >= 0){
//        return true;
// } 
//        return false;
  
// };

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// -----------------------------------------------------
// function greaterThanTen(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ------------------------------------------------------
/*
 Define a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
 */ 


// function filteredArray(arr, elem) {
//   let newArr = [];
  
// for(let i = 0; i < arr.length; i++){
// if(arr[i].indexOf(elem) == -1){//returns item index or -1 if absent.
//   newArr.push(arr[i]);
// }
// }
  
//   return newArr;
// }

// console.log(filteredArray([[5, 2, 7], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// --------------------------------------------------------
/*Define a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest. */ 

// let myNestedArray = [
//   // Only change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   ['concat', false, true, 'spread', 'array'],
//   ['mutate', 1327.98, 'splice', 'slice', 'push'],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//   // Only change code above this line
// ];

// myNestedArray[2][5] = ['deep'];
// myNestedArray[3][5] = ['deeper'];
// myNestedArray[4][5] = ['deepest'];
// // console.log(myNestedArray);
// console.log(myNestedArray[4][5]);

// ************************************************
// *************************************************

/*Write a function that  takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array */ 


// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, Zip) {
  
// userObj.data.friends.push(Zip);
// return userObj.data.friends
  
//}

//   console.log(addFriend(user, '53175'));
// console.log(user.data.location)

// ----------------------------=============+++++++++++
// -----------------------------------------------

/*write the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter. */ 


// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add(arr, bookName) {
let newBook = [...arr];// Copy the bookList array to a new array
  newBook.push(bookName);// Add bookName parameter to the end of the new array.
  return newBook;// Return the new array.
  }
/*This function should remove a book from the list and return the list */
function remove(arr, bookName) {
  let newBook = [...arr];
  const book_index = newBook.indexOf(bookName);// Check whether the bookName parameter is in new array.
  if (book_index >= 0) {

    newBook.splice(book_index, 1);// Remove the given paramater from the new array.
    return newBook;

    // Change code above this line
    }
}