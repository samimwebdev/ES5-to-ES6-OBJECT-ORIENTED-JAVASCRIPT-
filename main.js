// function Profile(firstName, lastName, age) {
//   // let _firstName = firstName
//   // let _age = age
//   //default
//   //this === {}
//   this.lastName = lastName
//   this.firstName = firstName
//   this.age = age

//   // Object.defineProperties(this, {
//   //   firstName: {
//   //     get() {
//   //       return 'Mr ' + _firstName
//   //     },
//   //     set(name) {
//   //       if (name === '') {
//   //         throw new Error("Name can't be empty string")
//   //       }
//   //       _firstName = name
//   //     },
//   //   },
//   //   age: {
//   //     get() {
//   //       return _age
//   //     },
//   //     set(age) {
//   //       if (age < 18) throw new Error('Age must be greater than 18')
//   //       _age = age
//   //     },
//   //   },
//   // })
// }

function Profile(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

Profile.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName + ' ' + this.age + ' years old'
}

//Inheritance
function ProfessionalProfile(firstName, lastName, age, profession) {
  //copy parent reference object
  Profile.call(this, firstName, lastName, age)
  this.profession = profession
}

ProfessionalProfile.prototype = Object.create(Profile.prototype)

// ProfessionalProfile.prototype.professionalFullName = function () {
//   return (
//     this.firstName +
//     ' ' +
//     this.lastName +
//     ' ' +
//     this.age +
//     ' years old' +
//     '-' +
//     this.profession
//   )
// }

ProfessionalProfile.prototype.fullName = function () {
  return (
    this.firstName +
    ' ' +
    this.lastName +
    ' ' +
    this.age +
    ' years old' +
    '-' +
    this.profession
  )
}

ProfessionalProfile.prototype.constructor = ProfessionalProfile

//HomeProfile constructor
function HomeProfile(firstName, lastName, age, nickName) {
  //copy parent reference object
  Profile.call(this, firstName, lastName, age)
  this.nickName = nickName
}

HomeProfile.prototype = Object.create(Profile.prototype)

HomeProfile.prototype.fullName = function () {
  return (
    this.firstName +
    ' ' +
    this.lastName +
    ' ' +
    this.age +
    ' years old' +
    '-' +
    this.nickName
  )
}

// HomeProfile.prototype.homeFullName = function () {
//   return (
//     this.firstName +
//     ' ' +
//     this.lastName +
//     ' ' +
//     this.age +
//     ' years old' +
//     '-' +
//     this.nickName
//   )
// }

ProfessionalProfile.prototype.constructor = ProfessionalProfile

const samim = new Profile('samim', 'Hasan', 30)
const samimP = new ProfessionalProfile('samim', 'Hasan', 30, 'web Programmer')
const samimH = new HomeProfile('samim', 'Hasan', 30, '....')

//Object oriented programming principle
//encapsulation
//Abstraction
//Inheritance
//polymorphism
