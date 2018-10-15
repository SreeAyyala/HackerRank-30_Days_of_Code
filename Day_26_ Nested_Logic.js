// Objective
// Today 's challenge puts your understanding of nested conditional statements to the test. You already have the knowledge to complete this challenge, but check out the Tutorial tab for a video on testing!
//
// Task
// Your local library needs your help !Given the expected and actual return dates for a library book, create a program that calculates the fine(if any) .The fee structure is as follows: If the book is returned on or before the expected return date,
//   no fine will be charged(i.e. :.If the book is returned after the expected return day but still within the same calendar month and year as the expected return date,.If the book is returned after the expected return month but still within the same calendar year as the expected return date, the.If the book is returned after the calendar year in which it was expected, there is a fixed fine of.Input Format The first line contains space - separated integers denoting the respective,, and on which the book was actually returned.The second line contains space - separated integers denoting the respective,, and on which the book was expected to be returned(due date).Constraints Output Format Print a single integer denoting the library fine for the book received as input.Sample Input 9 6 2015 6 6 2015 Sample Output 45 Explanation Given the following return dates : Actual : Expected : Because, we know it is less than a year late.Because, we know it 's less than a month late.
//  Because, we know that it was returned late(but still within the same month and year).Per the library 's fee structure, we know that our fine will be . We then print the result of  as our output.

============================================================================== function processData(input) {
  //Enter your code here
  var dates = input.split("\n");
  var a = dates[0].split(" ").map(Number);
  var b = dates[1].split(" ").map(Number);
  var actDate = new Date(a[2], a[1], a[0]);
  var expDate = new Date(b[2], b[1], b[0]);
  var fine = 0

  if (actDate <= expDate) 
    fine = 0;
  else if (a[1] == b[1] && a[2] == b[2]) 
    fine = 15 * (a[0] - b[0]);
  else if (a[2] == b[2]) 
    fine = 500 * (a[1] - b[1]);
  else 
    fine = 10000;
  
  console.log(fine);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
