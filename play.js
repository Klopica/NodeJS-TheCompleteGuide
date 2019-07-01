const person = {
  name: 'Klop',
  age: 35,
  greet() {
    console.log('Hi, I am ', this.name)
  }
}

const hobbies = ['Sports', 'Cooking']
// for (let hobby of hobbies) {
//   console.log(hobby)
// }

// console.log('NEW: ', hobbies.map(hobby => {
//   return 'Hobby: ' + hobby
// }))
console.log('NEW: ', hobbies.map(hobby => 'Hobby: ' + hobby))
console.log('OLD: ', hobbies)
