class Profile {
  #age = 20
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  static construct() {
    const profile = new Profile('samim', 'Hasan')
    return profile
  }

  fullName() {
    return this.firstName + ' ' + this.lastName + ' ' + this.age + ' years old'
  }

  get age() {
    return this.#age
  }

  set age(ageInYears) {
    if (ageInYears < 19) {
      throw new Error('Minors are not allowed')
    }
    this.#age = ageInYears
  }
}

class ProfessionalProfile extends Profile {
  constructor(firstName, lastName, age, profession) {
    super(firstName, lastName, age)
    this.profession = profession
  }
  fullName() {
    return super.fullName() + '-' + this.profession
  }
}

// const samim = new Profile('samim', 'Hasan', 30)
// const samim = new Profile('samim', 'Hasan')
const samim = Profile.construct()
const samimP = new ProfessionalProfile('samim', 'Hasan', 30, 'web programmer')
console.log(samimP)
