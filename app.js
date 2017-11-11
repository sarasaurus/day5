'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum (a,b) {
var sum = a + b;
console.log ('a is : ', a);
console.log ('b is : ', b);
var phrase = [sum, 'The sum of ' + a + ' and ' + b + ' is ' + sum + '.'];
return phrase;
}
testSum(4, 7);//test against test.js

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

function multiply (a,b) {
  var product = a * b;
  console.log ('a is : ', a);
  console.log ('b is : ', b);
  var phrase2 = [product, 'The product of ' + a + ' and ' + b + ' is ' + product + '.'];
  return phrase2;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////

/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){
  console.log(sum(a,b)[1]); //=> [11, "The sum of 4 and 7 is 11."]
  var sumFunc = sum(a,b);//calling sum function to asign the array to var sumFunc
  var multFunc = multiply(a,b);//calling multiply function to assign the array it produces to var multFunc

  var getArrSum = sumFunc[0];//selecting only the first value in the array of sumFunc
  console.log('result of array of sum function: ', getArrSum);

  var getArrMult = multFunc[0];
  console.log('result of first value of array of mult func: ', getArrMult);

  var combSum = sum(getArrSum,c);//calling sum function w values (ab) and c, to assign the array it creates to combSum
  console.log('sum of a+b+c: ', combSum[0]);//checking
  var combMult = multiply(getArrMult,c);
  console.log('product of a+b+c: ', combMult[0]);//checking

  var arrayQuest3 = [combSum[0], combMult[0], a + ' and ' + b + ' and ' + c + ' sum to ' + combSum[0] + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + combMult[0] + '.'];
  console.log(arrayQuest3);
  return arrayQuest3;//returns the array where pos 0 and 1 are the results of sum(abc) and mult(abc) respectively
}



///doesn't work
/*var abSum = retSum[0];//creating a variable for the sum of a + b
var abMult =  retMult[0];// creating a var for the prod of a * b
abcSum =
abcMult =
console.log ('a + b are: ', abSum);
console.log ('a * b are: ', abMult);
console.log ('a + b + c are: ', abcSum);
console.log ('a * b * c are: ', abcMult);
var phrase1 = [abcSum, 'The sum of ' + a + ' and ' + b + ' and ' + c + ' is ' + abcSum + '.'];
var phrase2 = [abcMult, 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + abcMult + '.'];
return phrase1 + phrase2;
*/

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line

}

// Here is the test for sumArray(); uncomment it to run it

// testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
