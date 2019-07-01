const person = {
  name: 'Klop',
  age: 35,
  greet() {
    console.log('Hi, I am ', this.name)
  }
}
const copied_person = {...person}
console.log(copied_person)

const hobbies = ['Sports', 'Cooking']
// for (let hobby of hobbies) {
//   console.log(hobby)
// }

// console.log('NEW: ', hobbies.map(hobby => {
//   return 'Hobby: ' + hobby
// }))
// console.log('NEW: ', hobbies.map(hobby => 'Hobby: ' + hobby))
// console.log('OLD: ', hobbies)
// hobbies.push('Programming')
// console.log(hobbies)

// REST and SPREAD operators
// If we want to add element to an array, and we don't want to edit the original array,
// but create a new array with all the old values and add to that copied array.
// This is common patern called IMMUTABILITY - in this patterns we never change the original values
// but mutate copies of values plus the changes

// const copied_array = hobbies.slice()
const copied_array = [...hobbies] // Array copied with spread operator
console.log(copied_array)

// The REST operator
// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3]
// }

const toArray = (...args) => {
  return args
}
console.log(toArray(1, 2, 3))
// If we call the same function with fourth argument, nothing changes. We still see output with 3 args
console.log(toArray(1, 2, 3, 4))
