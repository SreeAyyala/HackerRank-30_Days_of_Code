// Objective
// Today we 're learning about running time! Check out the Tutorial tab for learning materials and an instructional video!
//
// Task
// A prime is a natural number greater than that has no positive divisors other than and itself.Given a number,,
// determine and print whether it 's  or .
//
// Note: If possible,
// try to come up with a primality algorithm,
// or see what sort of optimizations you come up with for an algorithm.Be sure to check out the Editorial after submitting your code !Input Format The first line contains an integer,, the number of test cases.Each of the subsequent lines contains an integer,, to be tested for primality.Constraints Output Format For each test case, print whether is or on a new line.Sample Input 3 12 5 7 Sample Output Not prime Prime Prime
============================================================================== function processData(input) {
  var inputArr = input.split('\n').map(Number);
  inputArr.shift(); // removes the first element that is not required below

  inputArr.forEach(function(elem) {
    if (isPrime(elem)) {
      console.log('Prime');
    } else {
      console.log('Not prime');
    }
  });
}

function isPrime(number) {
  var range = Math.floor(Math.sqrt(number));
  if (number < 2) {
    return false;
  } else if (number === 2) {
    return true;
  }

  for (var i = 2; i <= range; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
