## SEBR0429
### Functions Exercise:

1.  Write a function called logIn that takes your name as a parameter and console.logs 'Hello /your name/!' when it is called. (/your name/ should be your name written as a literal)

2.  Take that same function up a notch by creating a new variable called isLoggedIn, and have the function measure that variable, and log 'Hello /your name/!' when the variable is true, or "please log in" when it is false

3. We are looking to re-sod our lawn. It has a length of 20' and a width of 30', with Sod costing $1.45/sqft. Additionally, it will cost $100 to have thew work done.  Write a function that finds the area of the lawn, the price of the Sod, and what the total cost will be to get the lawn redone. If our budget is $700, will it be enough? Log either how much extra we will need, or how much we will have left over

4.  Write a function that loops over the following array of SEBR students and prints out their name, and how many letters their name is

```js
const students = [
  'Alice',
  'Andy',
  'Andrew',
  'Casey',
  'Damian',
  'Emily',
  'Emilie',
  'Grant',
  'Howie',
  'Isabella',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Oscar'
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Umberto',
  'Wade',
  'Zhe'
]
```

It should give us "Alice is 5 letters long"... and so on

If you want to take it a bit further, add an additional condtional in that wll only return and log the names that are 5 or more letters long.

Then, to take it one step further, set *another* conditional that makes it so only names that are 5 or more letters long *and start with a vowel* are logged. 


## Higher Order Functions

const nums = [1, 3, 6, 9, 11, 15, 21, 25, 28, 30, 32, 34, 36, 40, 44, 45]

1) const getSquares = (nums) => {
  /**
   * Use .map to return an array of all nums multiplied by 2
   */
}

2) const isDivBy3 = (nums) => {
  /**
   * Use .map to return an array of booleans, if the number is divisible by 3 return true otherwise false
   * * The modulus % operator may be useful *
   */
}

3) const filterOdds = (nums) => {
  /**
   * Use .filter to return an array of all odd numbers
   * * The modulus % operator may be useful *
   */
}

4) const filterEvens = (nums) => {
  /**
   * Use .filter to return all even numbers
   * * The modulus % operator may be useful *
   */
}
5) const filterDivBy4 = (nums) => {
  /**
   * Use .filter to return all numbers that are divisible by 4
   * * The modulus % operator may be useful *
   */
}
6) const addAllUp = (nums) => {
  /**
   * Use .reduce to return the total sum of all numbers
   */
}

7) const multiplyAllNums = (nums) => {
  /**
   * Use .reduce to return the total product of all numbers
   */
}

// BONUS

```js


const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const sumSquareAllNums = (newNums) => {
  /**
   * Use .reduce to return the total sum of each number to the second power (what would PEMDAS say about this?)
   */
}

