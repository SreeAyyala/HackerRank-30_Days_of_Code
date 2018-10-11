/* Objective
// Today we 're discussing scope. Check out the Tutorial tab for learning materials and an instructional video!
//
// The absolute difference between two integers,
// and,
// is written as.The maximum absolute difference between two integers in a set of positive integers,,
// is the largest absolute difference between any two integers in.The Difference class is started for you in the editor.It has a private integer array()for storing non - negative integers, and a public integer()for storing the maximum absolute difference.Task Complete the Difference class by writing the following : A class constructor that takes an array of integers as a parameter and saves it to the instance variable.A computeDifference method that finds the maximum absolute difference between any numbers in and stores it in the instance variable.Input Format You are not responsible for reading any input from stdin.The locked Solution class in your editor reads in lines of input; the first line contains, and the second line describes the array.Constraints, where Output Format You are not responsible for printing any output; the Solution class will print the value of the instance variable.Sample Input 3 1 2 5 Sample Output 4 Explanation The scope of the array and integer is the entire class instance.The class constructor saves the argument passed to the constructor as the instance variable(where the computeDifference method can access it).To find the maximum difference, computeDifference checks each element in the array and finds the maximum difference between any elements : The maximum of these differences is, so it saves the value as the instance variable.The locked stub code in the editor then prints the value stored as, which is. */

/***Had to use Java 8 As there was no option of using Javascript***/
============================================================================= public Difference(int[] elements) {
  this.elements = elements;
}

public void computeDifference() {
  int max = 1,
  min = 100;
  for (int e : elements) {
    max = Math.max(max, e);
    min = Math.min(min, e);
  }
  maximumDifference = max - min;
}