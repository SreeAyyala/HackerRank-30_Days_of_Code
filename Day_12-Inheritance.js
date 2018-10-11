/*Objective
Today,
we 're delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video!

Task
You are given two classes,
Person and Student,
where Person is the base class and Student is the derived class.Completed code for Person and a declaration for Student are provided for you in the editor.Observe that Student inherits all the properties of Person.Complete the Student class by writing the following : A Student class constructor, which has parameters : A string,.A string,.An integer,.An integer array(or vector)of test scores,.A char calculate()method that calculates a Student object 's average and returns the grade character representative of their calculated average:
 Grading.png Input Format The locked stub code in your editor calls your Student class constructor and passes it the necessary arguments.It also calls the calculate method(which takes no arguments).You are not responsible for reading the following input from stdin : The first line contains,, and, respectively.The second line contains the number of test scores.The third line of space - separated integers describes.Constraints Output Format This is handled by the locked stub code in your editor.Your output will be correct if your Student class constructor and calculate()method are properly implemented.Sample Input Heraldo Memelli 8135627 2 100 80 Sample Output Name : Memelli, Heraldo ID : 8135627 Grade : O Explanation This student had scores to average : and.The student 's average grade is . An average grade of  corresponds to the letter grade , so our calculate() method should return the character' O '.*/

========================================================================== class Student extends Person {
  /*
    *   Class Constructor
    *
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
  /*
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
  // Write your method here
  calculate() {
    var total = 0;

    for (var i = 0; i < this.scores.length; i++) {
      total += this.scores[i]
    }
    var averageScore = (total / this.scores.length);

    if (averageScore <= 100 && averageScore >= 90) {
      return 'O';
    } else if (averageScore < 90 && averageScore >= 80) {
      return 'E';
    } else if (averageScore < 80 && averageScore >= 70) {
      return 'A';
    } else if (averageScore < 70 && averageScore >= 55) {
      return 'P';
    } else if (averageScore < 55 && averageScore >= 40) {
      return 'D';
    } else if (averageScore < 40) {
      return 'T';
    }
  }

}
