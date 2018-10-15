// Objective
// Welcome to the last day !Today,
// we 're discussing bitwise operations. Check out the Tutorial tab for learning materials and an instructional video!
//
// Task
// Given set.Find two integers,
// and(where),
// from set such that the value of is the maximum possible and also less than a given integer,.In this case,
// represents the bitwise AND operator.Input Format
//
// The first line contains an integer,,
// the number of test cases.Each of the subsequent lines defines a test case as space - separated integers,
// and,
// respectively.Constraints
//
// Output Format
//
// For each test case,
// print the maximum possible value of on a new line.Sample Input
//
// 3
// 5 2
// 8 5
// 2 2
// Sample Output
//
// 1
// 4
// 0
============================================================================== function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);
    var a = k - 1;
    var b = (~ a) & -(~ a);

    if ((a | b) > n) 
      console.log(a - 1);
    else 
      console.log(a);
    }
  }
