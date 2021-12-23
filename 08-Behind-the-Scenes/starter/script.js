'use strict'

const jonas = {
  firstName: 'Jonas',
  year: 1996,
  calcAge: function () {
    // console.log(this)
    console.log(2037 - this.year)

    // SOLUTION 1 - use "const self = this" before function and in function use self
    // const self = this
    // const isMillenial = function () {
    //   // console.log(this.year > 1981 && this.year <= 1996)
    //   console.log(self)
    //   console.log(self.year > 1981 && self.year <= 1996)
    // }
    // isMillenial()

    // SOLUTION 2 - use arrow function because it dont have own this keyword and get this from parrent scope
    const isMillenial = () => {
      console.log(this)
      console.log(this.year > 1981 && this.year <= 1996)
    }
    isMillenial()
  },

  // greet: () => console.log(`Hey ${this.firstName}`),
  greet: function () {
    console.log(this)
    console.log(`Hey ${this.firstName}`)
  },
}

// isMillenial()

jonas.greet()
jonas.calcAge()

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}
addExpr(2, 5) // You can assing more parameters than this function requires
addExpr(2, 5, 8, 12) // You can assing more parameters than this function requires

var addArrow = (a, b) => {
  console.log(arguments) //arguments keyword exist only in regular functions
  return a + b
}

addArrow(2, 5)
