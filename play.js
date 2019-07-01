const person = {
  name: 'Klop',
  age: 35,
  hasHobbies: true,
  // greet: () => {
  //   console.log('Hi, I am ' + this.name)
  // }
  greet() {
    console.log('Hi, I am ', this.name)
  }
}

// This returns "undefined"
// console.log(person.greet())

person.greet()
