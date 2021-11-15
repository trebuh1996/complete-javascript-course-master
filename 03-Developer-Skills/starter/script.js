// Remember, we're gonna use strict mode in all scripts now!
'use strict'

/*

//++++++++++++++++++++++++++++++++++++++++++
//lesson 55 - adjusting the vs code
//++++++++++++++++++++++++++++++++++++++++++
const xyzabc = 23
const y = 1

const calcAge = birthYear => 2037 - birthYear
console.log(calcAge(1996))

//FIXME
//BUG
//TODO

//++++++++++++++++++++++++++++++++++++++++++
//lesson 56 - installing the node.js, setting dev environment
//++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++++++++++++++++++++++++++++++
//lesson 59 - Using Google, StackOverflow and MDN
//++++++++++++++++++++++++++++++++++++++++++

const temp0 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
const temp1 = [1, 5, 7]
// const temp2 = [2, 6, 8]

const calcTempAmp = function (temp0) {
    let max = temp0[0]
    let min = temp0[0]
    for (let i = 0; i < temp0.length; i++) {
        if (typeof temp0[i] !== 'number') continue
        if (temp0[i] > max) max = temp0[i]
        if (temp0[i] < min) min = temp0[i]
    }
    return max - min
}

const calcTempAmpNew = function (temp0, temp1) {
    const array1 = ['a', 'b', 'c']
    const array2 = ['d', 'e', 'f']
    const array3 = array1.concat(array2)

    const temps = temp0.concat(temp1)
    console.log(temps)

    // const
    let max = temps[0]
    let min = temps[0]
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue
        if (temps[i] > max) max = temps[i]
        if (temps[i] < min) min = temps[i]
    }
    return max - min
}

const amplitudeNew = calcTempAmpNew([3, 5, 1], [9, 0, 5])
console.log(amplitudeNew)





//++++++++++++++++++++++++++++++++++++++++++
//lesson 60 - Debugging (Fixing Errors)
//++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++
//lesson 61 - Debugging with the console and breakpoints
//++++++++++++++++++++++++++++++++++++++++++

//in console, in the sources card you can add an breakpoints to code

const measureKelvin = function () {
    const measurment = {
        type: 'temp',
        unit: 'celsius',
        //value: Number(prompt('Degrees celsius:')),
        value: 10,
    }
    // B) Find the bug
    console.log(measurment)
    // console.table(measurment)

    const kelvin = measurment.value + 273
    return kelvin
}

// A) IDENTIFY
console.log(measureKelvin())
// console.warn(measureKelvin())
// console.error(measureKelvin())


*/

//++++++++++++++++++++++++++++++++++++++++++
//lesson 62 - Coding challenge #1
//++++++++++++++++++++++++++++++++++++++++++

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

const forecastArr1 = [17, 21, 23]
const forecastArr2 = [12, 5, -5, 0, 4]

const printForecast = function (arr) {
    let assemblyText = ''
    let text = ''

    for (let i = 0; i <= arr.length - 1; i++) {
        text = `... ${arr[i]}ºC in ${i + 1} days `
        assemblyText = assemblyText + text
    }

    return assemblyText
}

console.log(printForecast(forecastArr1))
console.log(printForecast(forecastArr2))
