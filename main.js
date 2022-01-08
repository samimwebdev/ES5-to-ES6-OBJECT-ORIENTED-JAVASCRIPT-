//Understanding object
//Object interface, getter, setter , private properties
//constructor function , factory function
//understanding prototype, prototype chain, advantage
//Declaring our own prototype

//object oriented javascript

// const samim = {
//   _firstName: 'samim',
//   _lastName: 'fazlu',
//   _age: 30,
//   get firstName() {
//     console.log('calling getter')
//     return 'Mr ' + this._firstName
//   },
//   set lastName(name) {
//     console.log('calling setter')
//     //validation
//     if (name === '') {
//       throw new Error("Name can't be empty")
//     } else {
//       this._lastName = name
//     }
//   },
//   fullName() {
//     return (
//       this._firstName + ' ' + this._lastName + ' ' + this._age + 'years old'
//     )
//   },
// }

//make your interface simple

// console.log(samim.firstName)
// console.log(samim.fName)

// samim.fName = ''
// console.log(samim.firstName)

//DOn't touch this properties
// samim._firstName = ''

//DOn't touch this properties
// console.log(samim._firstName)
// console.log(samim.fullName())

//constructor function

//factory function
// function profile(firstName, lastName, age) {
//   return {
//     firstName
//     lastName,
//     age,
//     fullName() {
//       return this.firstName + ' ' + this.lastName + ' ' + this.age + 'years old'
//     },
//   }
// }

// console.log(profile('samim', 'Hasan', 30))
// console.log(profile('Kohusik', 'kumar', 25))

//constructor function

// function Profile(firstName, lastName, age) {
//   //default
//   //this === {}
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.fullName = function () {
//     return this.firstName + ' ' + this.lastName + ' ' + this.age + ' years old'
//   }
//   //default
//   //return this
// }

// const samim = new Profile('samim', 'Hasan', 30)
// const koushik = new Profile('koushik', 'kumar', 30)
// console.log(samim)
// console.log(koushik)
// console.log(samim.fullName())

// const str = 'samim'
//new String(), new Number(), new Array(), new Object(), new Function()
const str = new String('samim')

console.log(str.length)
const result = str.trim()
console.log(result.length)

//prototype chain
//base is always prototype object
//String(own)- String prototype-base object
//Array(own)-  Array prototype-base object
//Number(own)- Number prototype-base object
//Object(own)- base object

//Accessing prototype

//by created object (__proto__)
//by constructor function (prototype)
console.log(str.__proto__ === String.prototype) //true
console.log(str.__proto__.__proto__ === Object.prototype) //true

//Benefits of prototype
//create single copy and access on demand

//our own Prototype

function Profile(firstName, lastName, age) {
  let _firstName = firstName
  let _age = age
  //default
  //this === {}
  this.lastName = lastName
  Object.defineProperties(this, {
    firstName: {
      get() {
        return 'Mr ' + _firstName
      },
      set(name) {
        if (name === '') {
          throw new Error("Name can't be empty string")
        }
        _firstName = name
      },
    },
    age: {
      get() {
        return _age
      },
      set(age) {
        if (age < 18) throw new Error('Age must be greater than 18')
        _age = age
      },
    },
  })
  console.log(this)
}

Profile.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName + ' ' + this.age + ' years old'
}

const samim = new Profile('samim', 'Hasan', 30)
console.log(samim.fullName())
// const koushik = new Profile('koushik', 'kumar', 30)
