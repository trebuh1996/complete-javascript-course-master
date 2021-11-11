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

//  Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀

const Mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2 
        return this.BMI 
    }
}


const John = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2 
        return this.BMI 
    }
}

console.log(Mark.calcBMI())
console.log(John.calcBMI())

console.log(`${Mark.firstName} ${Mark.lastName} BMI(${Mark.BMI}) is ${Mark.BMI > John.BMI ? "greater" : "smaller"} than ${John.firstName} ${John.lastName} BMI(${John.BMI})`)


// console.log(Mark)
// console.log(John)






//++++++++++++++++++++++++++++++++++++++++++
//lesson 46 - for loop
 //++++++++++++++++++++++++++++++++++++++++++

 for(let i = 1; i <= 10; i++){
     console.log(`powtórzenie ${i}`)
 }






//++++++++++++++++++++++++++++++++++++++++++
//lesson 47 - looping arrays, breaking, counting
 //++++++++++++++++++++++++++++++++++++++++++

const hubertArray = [
    'Hubert',
    'Wojciechowski',
    2037 - 1996,
    'twój_stary',
    ["Jan", "Stan", "uwuwłewuwłe_onietłe_osas"]
];

const types = []

for(let i = 0; i < hubertArray.length ; i++){
    console.log(hubertArray[i], typeof hubertArray[i] )
    // types[i] = typeof hubertArray[i]
    types.push(typeof hubertArray[i])
    
}
console.log(types)



const years = [1996, 1650, 1440, 800]
const ages = []

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages)

console.log("--------- only string(continue) ----------")
for (let i = 0; i < hubertArray.length; i++){
    if(typeof hubertArray[i] !== 'string') continue;
    console.log(hubertArray[i], typeof hubertArray[i])
}

console.log("--------- break ----------")
for (let i = 0; i < hubertArray.length; i++){
    if(typeof hubertArray[i] !== 'string') break;
    console.log(hubertArray[i], typeof hubertArray[i])
}






//++++++++++++++++++++++++++++++++++++++++++
//lesson 48 - Looping Backwards and Loops in Loops
 //++++++++++++++++++++++++++++++++++++++++++


 const hubertArray = [
    'Hubert',
    'Wojciechowski',
    2037 - 1996,
    'hooker',
    ["Jan", "Stan", "uwuwłewuwłe_onietłe_osas"]
]

for (let i = hubertArray.length - 1; i >= 0; i--){
    console.log(i, hubertArray)
}

for (let ex = 1; ex < 4; ex++){
    console.log(`------- starting exercise ${ex} --------`)
    
    for(let rep = 1; rep < 6; rep++){
        console.log(`lifting weight repetition ${rep}`)
    }
}





//++++++++++++++++++++++++++++++++++++++++++
//lesson 49 - While loop
 //++++++++++++++++++++++++++++++++++++++++++

 for (let rep = 1; rep <= 10; rep++){
     console.log(`abcdef`)
 }


let rep = 1
 while (rep <= 10){
    console.log(`WHILE: Lifting weights repetition ${rep}`)
    rep++
 }


 let dice = Math.trunc(Math.random() * 6) + 1;
 while(dice !== 6){
     console.log(`dice: ${dice}`)
     dice = Math.trunc(Math.random() * 6) + 1;
 }



  */

//++++++++++++++++++++++++++++++++++++++++++
//lesson 50 - Coding Challenge #4
 //++++++++++++++++++++++++++++++++++++++++++

//  Let's improve Steven's tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

const calcAverage = function(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    let value = sum / arr.length
    return value
}

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20   // ternary operator
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []



for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals.push(tips[i] + bills[i])
}

console.log(bills)
console.log(tips)
console.log(totals)
console.log(calcAverage(totals))