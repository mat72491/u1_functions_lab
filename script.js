//1.

// let logIn = (name) => console.log(`Hello ${name}!`)
// logIn('Michael')

//2.

// function logIn(name,isLoggedIn){
//     if (isLoggedIn === true) {
//         console.log(`Hello ${name}!`)
//     }else console.log(`please log in`)
// }
// logIn('Michael', false)

//3.

// function lawnBudget (length, width, labor, price, budget){
//     console.log(budget - ((length * width * price) + labor))
// }
// lawnBudget(20, 30, 100, 1.45, 700)

//4.
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
    'Oscar',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Umberto',
    'Wade',
    'Zhe'
  ]
  // for (i = 0; i < students.length; i ++){
  //   console.log(students[i] + " " + students[i].length)
  // }

  // for (i = 0; i < students.length; i ++){
  //   if (students[i].length > 5) {
  //     console.log(students[i])
  //   }
  // }

  for (i = 0; i < students.length; i ++){
    if (students[i].length > 5 && 
      (students[i][0] === "A" || 
      students[i][0] === "E" ||
      students[i][0] === "I" ||
      students[i][0] === "O" ||
      students[i][0] === "U"
     )) {
      console.log(students[i])
    }
  }