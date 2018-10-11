// Objective
// Today,
// we 're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!
//
// Task
// Given a base - integer,,
// convert it to binary(base -).Then find and print the base - integer denoting the maximum number of consecutive 's in ' s binary representation.Input Format
//
// A single integer,.Constraints
//
// Output Format
//
// Print a single base - integer denoting the maximum number of consecutive 's in the binary representation of .
//
// Sample Input 1
//
// 5
// Sample Output 1
//
// 1
// Sample Input 2
//
// 13
// Sample Output 2
//
// 2
// Explanation
//
// Sample Case 1 : The binary representation of is,
// so the maximum number of consecutive 's is .
//
// Sample Case 2 : The binary representation of is,
// so the maximum number of consecutive 's is .

========================================================================= function main() {
  var n = parseInt(readLine());
  var binary = [];

  while (n > 0) {
    binary.push(n % 2)
    n = Math.floor(n / 2)
  }

  binary = binary.reverse()

  var ones = 0;;
  var max = 0;

  for (var i = 0; i < binary.length; i++) {
    if (binary[i] === 1) {
      ones += 1;
    } else if (binary[i] === 0) {
      if (ones > max) 
        max = ones;
      ones = 0;
    }
  }

  if (ones > max) 
    max = ones

  console.log(max)
}
