const name = 'Klop'
let age = 35
const hasHobbies = true

// function summarizeUser(userName, userAge, userHasHobby) {
//   return 'Name is ' +
//   userName +
//   ', age is ' + userAge +
//   ' and the user has hobbies ' + userHasHobby
// }

const summarizeUser = (userName, userAge, userHasHobby) => {
  return 'Name is ' +
  userName +
  ', age is ' + userAge +
  ' and the user has hobbies ' + userHasHobby
}

// const add = (a, b) => {
//   return a + b
// }

const add = (a, b) => a + b
const addOne = a => a + 1
const addRandom = () => 1 + 2

console.log(addRandom(1))

console.log(summarizeUser(name, age, hasHobbies))
