'use strict' //showing errors in console, always on when learning 
/*

// it can forbites certain things to do 
// create visible error


let hasDriversLicense = false
let passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log("i can drive :D")

//const interface = 'dupa1'
//const private = 2137

function logger() {
    console.log('My name is Hubert')

}

logger()
logger()
logger()

function fruitProc(apples, oranges){
    console.log(apples, oranges)
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProc(5, 0);
console.log(appleJuice);
const appleOragngeJuice = fruitProc(4, 4);
console.log(appleOragngeJuice);

const num = Number("411");


// lesson 34 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const dupa = calcAge1(1212);
// console.log(dupa);
// const dupa2 = calcAge2(1212);
// console.log(dupa2);

//// first type of function definition
//// it is called "function declaration"
function calcAge1(birthYear){
    //const age = 2037 - birthYear
    return 2037 - birthYear
}

//calcAge1(1996);
console.log(calcAge1(1996))

//// second type of function definition
// here you can assign a variable to function
// it is called "function expression"
// function is value, not type like int or bool
const calcAge2 = function(birthYear){
    return 2037 - birthYear
}
console.log(calcAge2(1996))
console.log(calcAge2(1996))


// big difference
// you can call function declarations before there defined in code
 

// lesson 35 +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Arrow function
// it's like a function expression but in one line
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1990)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement}
    years`
}

console.log(yearsUntilRetirement(1996,"hubert"))
console.log(yearsUntilRetirement(2000,"bob"))




//lesson 36
//++++++++++++++++++++++++++++++++++++++++++

//zagniedżanie funkcji wewnątrz funkcji

function cutFruitPeces(fruit){
    return fruit * 4;
}

function fruitProc(apples, oranges){
    const applePieces = cutFruitPeces(apples)
    const orangePieces= cutFruitPeces(oranges)
    
    //console.log(apples, oranges)
    const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice
}

console.log(fruitProc(2,3))


//++++++++++++++++++++++++++++++++++++++++++
//lesson 37
//++++++++++++++++++++++++++++++++++++++++++

// const Val_1 = 10
// const Val_2 = 12
// const Val_3 = 14


//++++++++++++++++++++++++++++++++++++++++++
//lesson 37 - coding challenge
//++++++++++++++++++++++++++++++++++++++++++

const calcAverage = (Val_1, Val_2, Val_3) => ((Val_1+Val_2+Val_3) / 3)

const checkWinner = function(teamAverage_1, teamAverage_2) {
    if (teamAverage_1 >= (teamAverage_2 * 2) ){
        console.log(`team dolphins wins with ${teamAverage_1} points vs ${teamAverage_2}`)
    }
    else if(teamAverage_2 >= teamAverage_1 * 2){
        console.log(`team monkeys wins with ${teamAverage_2} points vs ${teamAverage_1}`)
    }
    
    else console.log("Noone wins") 
}

let teamAverage_1 = (calcAverage(44, 23, 71))
let teamAverage_2 = (calcAverage(65, 54, 49))
checkWinner(teamAverage_1, teamAverage_2)

teamAverage_1 = (calcAverage(85, 54, 41))
teamAverage_2 = (calcAverage(23, 34, 27))
checkWinner(teamAverage_1, teamAverage_2)


//++++++++++++++++++++++++++++++++++++++++++
//lesson 39 - data arrays
//++++++++++++++++++++++++++++++++++++++++++

const friends = ["abc", "bca", "cab"]
const years = new Array(12, 13, 14, 15)
console.log(friends)
console.log(years)
console.log(friends[0])
console.log(years[1])
console.log(friends.length)
console.log(friends[0].length)

friends[2] = "dupaWołowa1"
console.log(friends)



//++++++++++++++++++++++++++++++++++++++++++
//lesson 40 
 //++++++++++++++++++++++++++++++++++++++++++

const friends = ["michael", "steven", "peter"]

//adding elements to array
const newLenght = friends.push("Jay")
console.log(friends)
console.log(newLenght)
friends.unshift("JayZ")
console.log(friends)
//removing elements from array
friends.pop()
console.log(friends)

friends.shift()
console.log(friends)

//what index of element in array

console.log(friends.indexOf('steven'))
console.log(friends.indexOf('michael'))

// is there any steven inside in array?

console.log(friends.includes('steven'))
console.log(friends.includes('hubert'))
friends.push(23)
console.log(friends.includes('23'))
console.log(friends.includes(23))

 


//++++++++++++++++++++++++++++++++++++++++++
//lesson 41 coding challenge
 //++++++++++++++++++++++++++++++++++++++++++

//  steven is still building his tip calculator, using
// the same rules as before: Tip 15% of the bill if the
// bill value is between 50 and 300, and if the value is 
// different, the tip is 20%.

// 1. write a function 'calcTip' that takes any bill value as an input
// an return the corresponding tip, calculated based on the rules above.
// use the function type you like the most. Test the function using a bill
// value of 100.

// 2. And now let's use arrays! So create an array 'bills' containing 
// the test data below

// 3. Create ab array 'tips' containing the tip value for each  
// bill, calculated from the function you created before.

// 4. BONUS: Createan array 'total' containing the total values, so the bill + tip.



// const calcTip = function(bill) {
//     if (bill <= 300 && bill >= 100) {
//         return (bill * 0.15)
//     }
//     else return bill * 0.20
// } 

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20   // ternary operator
}

const billValue = [50, 99, 130, 199, 200, 299, 300, 301, 500]
const billArray = []

billArray.push(calcTip(billValue[0]))
billArray.push(calcTip(billValue[1]))
billArray.push(calcTip(billValue[2]))
billArray.push(calcTip(billValue[3]))
billArray.push(calcTip(billValue[4]))
billArray.push(calcTip(billValue[5]))
billArray.push(calcTip(billValue[6]))
billArray.push(calcTip(billValue[7]))
billArray.push(calcTip(billValue[8]))

console.log(billValue)
console.log(billArray)



//++++++++++++++++++++++++++++++++++++++++++
//lesson 43 objects (like dictionarie in python)
 //++++++++++++++++++++++++++++++++++++++++++

const hubert = {
    firstName: "Hubert",
    lastName: "Wojciechowski",
    age: 2025 - 1996,
    job: "zpsa",
    friends: ["Filip", "no_one"]
};

console.log(hubert.firstName)
console.log(hubert["lastName"])

const nameKey = 'Name'
console.log(hubert["first" + nameKey])
console.log(hubert["last" + nameKey])

let interestedIn

const promptWin = function(){
    interestedIn = prompt('what do you want to knwo about Hubert? Chose between firstName, lastName, age, job, and friends')
}
const promptWin1 = function(){
    interestedIn = prompt('wrong request! choose between Chose between firstName, lastName, age, job, and friends')
}
//console.log(hubert.promptWin)  //this wont work
promptWin()

console.log(hubert)

if(hubert[interestedIn]){
    console.log(hubert[interestedIn])
} else {
    //console.log("wrong request! choose between firstName....")
    promptWin1()
    //let x
    //do x=promptWin1()
    //while (x != hubert);
}

hubert.location = "Portugal"
hubert["twitter"] = "@dupawołowa"
console.log(hubert.friends.length + 1)


*/

//++++++++++++++++++++++++++++++++++++++++++
//lesson 44 - object methods
 //++++++++++++++++++++++++++++++++++++++++++

 const hubert = {
    firstName: "Hubert",
    lastName: "Wojciechowski",
    birthYear: 1996,
    job: "Automatic",
    friends: ["Filip", "no_one"],
    age: 11,
    sex: "male",
    license: false,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear
    // }

    // calcAge: function(){
    //     //console.log(this)
    //     return 2037 - this.birthYear
    // }

    calcAge: function() {
        //console.log(this)
        return 2021 - this.birthYear
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and ${this.sex === "male" ? "he" : "she"} has ${this.license ? "a" : "no"} driver's license.`
    }
}

// const text1 = `Hubert is a ${hubert.calcAge()}-years old ${hubert.job} and ${hubert.sex === "male" ? "he" : "she"} has ${hubert.license ? "a" : "no"} driver's license.`

console.log(hubert.calcAge())
console.log(hubert.getSummary())
console.log(hubert.age)
// console.log(hubert['calcAge'](1996))




//++++++++++++++++++++++++++++++++++++++++++
//lesson 45 - coding challenge #3
 //++++++++++++++++++++++++++++++++++++++++++