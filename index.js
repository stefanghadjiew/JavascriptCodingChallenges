/* Create a function which returns the number of true values there are in an array.
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0 */


const countTrue = (arr) => {
    if(arr.length === 0) {return 0}
    return (
        arr.filter(item => item === true).length
    ) 
}

let arr1=[false,false,true,true,false,true]
console.log(countTrue(arr1))

let arr2=[]
console.log(countTrue(arr2))


/* Given an array of women and an array of men, either:

Return "sizes don't match" if the two arrays have different sizes.
If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc. */

/* zipIt(["Elise", "Mary"], ["John", "Rick"])
 ➞ [["Elise", "John"], ["Mary", "Rick"]]

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
 ➞ "sizes don't match"

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
 ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]] */

const zipIt = (women,men) => {
    if(women.length !== men.length) {return "sizes dont match"}
    let newArr = [];
    for(let i=0;i<women.length;i++) {
        for(let j=0;j<men.length;j++) {
            if(women.indexOf(women[i]) === men.indexOf(men[j])) {
                newArr.push(women[i])
                newArr.push(men[j])
            }
        }
    }
    let finalArr = []
    for(let k=0;k<newArr.length;k+=2){
        finalArr.push(newArr.slice(k,k+2))
    }
    return finalArr
}

const women1 = ["Ana", "Amy", "Lisa"]
const men1 = ["Bob", "Josh", "Tim"]
console.log(zipIt(women1,men1))

/* Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points. */
/* lineLength([15, 7], [22, 11]) ➞ 8.06

lineLength([0, 0], [0, 0]) ➞ 0

lineLength([0, 0], [1, 1]) ➞ 1.41 */
/* Notes
The order of the given numbers is X, Y.
This challenge is easier than it looks.
Round your result to two decimal places. */

const lineLength = (p1,p2) => {
 return Math.sqrt(Math.pow((p1[0] - p2[0]),2) + Math.pow((p1[1]-p2[1]),2))
}

console.log(lineLength([0, 0], [0, 0]))
console.log(lineLength([15, 7], [22, 11]))
console.log(lineLength([0, 0], [1, 1])) 


/* The left shift operation is similar to multiplication by powers of two.

Sample calculation using the left shift operator (<<):
10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers. */
/* shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944 */

const shiftToLeft = (num1,num2) => {
    return num1*Math.pow(2,num2)
}

console.log(shiftToLeft(5, 2))
console.log(shiftToLeft(10, 3))
console.log(shiftToLeft(-32, 2))
console.log(shiftToLeft(-6, 5))
console.log(shiftToLeft(12, 4))
console.log(shiftToLeft(46, 6))

/* Write a function redundant that takes in a string str and returns a function that returns str.

const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ "" */

const redundant = str => {
    return function inner(){
        return str
    }
}
    
const f1=redundant("Hello")
console.log(f1())


/* A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.
isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false */

const isRepdigit = (num) => {
    if(num < 0) {return false}
    if(num === 0) {return true}
    const str = num.toString()
    if(str[0] === str[1]) {return true}
}
console.log(isRepdigit(66))
console.log(isRepdigit(0))
console.log(isRepdigit(-11))

/* A snail goes up the stairs. Every step, he must go up the step, then go across to the next step. He wants to reach the top of the tower.

Write a function that returns the distance the snail must travel to the top of the tower given the height and length of each step and the height of the tower. */

/* totalDistance(0.2, 0.4, 100.0) ➞ 300.0
// Total distance is 300.

totalDistance(0.3, 0.2, 25.0) ➞ 41.7

totalDistance(0.1, 0.1, 6.0) ➞ 12.0 */

const totalDistance = (stepHeight,stepLenght,towerHeight) => {
    return ((towerHeight/stepHeight) * (stepHeight + stepLenght))
}

console.log(totalDistance(0.2, 0.4, 100.0))
console.log(totalDistance(0.3, 0.2, 25.0))
console.log(totalDistance(0.1, 0.1, 6.0))

/* [1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6] */

const sortIt = (arr) => {
    return arr.sort()
}

console.log(sortIt([4, 1, 3]))
console.log(sortIt([[4], [1], [3]]))
console.log(sortIt([4, [1], 3]))
console.log(sortIt([[4], 1, [3]]))
console.log(sortIt([[3], 4, [2], [5], 1, 6]))

/* Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

quarter = 25c
dime=10c
nickel=5c
penny=1c

changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false */

const changeEnough = (arr,val) => {
    const arrOfDollarValue = arr.map((num,index) =>{
        if(index === 0) {return (num*0.25)}
        if(index === 1) {return (num*0.1)}
        if(index === 2) {return (num*0.05)}
        if(index === 3) {return (num*0.01)}
    })
    const reducer = (acc,currVal) => acc + currVal
    const finalValue = arrOfDollarValue.reduce(reducer)
    if (finalValue >= val) {return true} else {return false}
}

console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([0, 0, 20, 5], 0.75))
console.log(changeEnough([30, 40, 20, 5], 12.55))
console.log(changeEnough([10, 0, 0, 50], 3.85))
console.log(changeEnough([1, 0, 5, 219], 19.99))

/* Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */

const arrayOfMultiples = (num,length) => {
    let newArr = []
    let newNum = 0
    for (let i=0;i<length;i++) {
        newNum +=num
        newArr.push(newNum)
    }
    
    return newArr;
    
}

console.log(arrayOfMultiples(7, 5))
console.log(arrayOfMultiples(12, 10))
console.log(arrayOfMultiples(17, 6))

/* Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ [] */

const toArray = (obj) => {
    if(obj === {}){return []}
    let arr = []
    const objKeys = Object.keys(obj)
    const objValues = Object.values(obj)
    for (let i=0;i<objKeys.length;i++) {
        for(let j=0;j<objValues.length;j++) {
            if(objKeys.indexOf(objKeys[i]) === objValues.indexOf(objValues[j])) {
                arr.push(objKeys[i])
                arr.push(objValues[j])
            }
            
        }
    }
    let finalArr = []
    for(let k=0;k<arr.length;k+=2){
        finalArr.push(arr.slice(k,k+2))
    }
    return finalArr
}

console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))

/* Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]] */

const keysAndValues = (obj) => {
    let arrOfKeysAndValues = []
    const objKeys = Object.keys(obj)
    const objValues = Object.values(obj)
    arrOfKeysAndValues.push(objKeys)
    arrOfKeysAndValues.push(objValues)
    return arrOfKeysAndValues
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))

/* Write a function that converts an object into an array of keys and values.
objectToArray({
    D: 1,
    B: 2,
    C: 3
  }) ➞ [["D", 1], ["B", 2], ["C", 3]]
  
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] */

const objectToArray = obj => {
    let arr = []
    const objKeys = Object.keys(obj)
    const objValues = Object.values(obj)
    for(let i=0;i<objKeys.length;i++) {
        for(let j=0;j<objValues.length;j++){
            if(objKeys.indexOf(objKeys[i]) === objValues.indexOf(objValues[j])) {
                arr.push(objKeys[i])
                arr.push(objValues[i])
            }
        }
    }
    let finalArr =[]
    for(let k=0;k<arr.length;k+=2) {
        finalArr.push(arr.slice(k,k+2))
    }
    return finalArr
  }

  console.log( objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }))

/* Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(4.5, 3, 8) ➞ false */

const intWithinBounds = (n,lower,upper) => {
    if(Number.isInteger(n) === false) {return false}
    if(lower < n && n< upper) {return true}
    return false
}

console.log(intWithinBounds(3, 1, 9))
console.log(intWithinBounds(6, 1, 6))
console.log(intWithinBounds(4.5, 3, 8))

/* This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
1, 3, 6, 10, 15
This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

Write a function that gives the number of dots with its corresponding triangle number of the sequence.

triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220 */

const triangle = num => {
    return num*(num+1)/2
}

console.log(triangle(1))
console.log(triangle(6))
console.log(triangle(215))

/* Create a function that returns true if two arrays contain identical values, and false otherwise.

To solve this question, your friend writes the following code:
function checkEquals(arr1, arr2) {
    if (arr1 === arr2) {
      return true
     } else {
      return false
     }
    }
    But testing the code, you see that something is not quite right. Running the code yields the following results:

    checkEquals([1, 2], [1, 3]) ➞ false
    // Good so far...
    
    checkEquals([1, 2], [1, 2]) ➞ false
    // Yikes! What happened?
    Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:
    
    Examples
    checkEquals([1, 2], [1, 3]) ➞ false
    
    checkEquals([1, 2], [1, 2]) ➞ true
    
    checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
    
    checkEquals([4, 7, 6], [4, 5, 6]) ➞ false */

    const checkEquals = (arr1,arr2) => {
        if (arr1.length !== arr2.length) {return false}
        return arr1.every((value,index) => value === arr2[index] )
    }

    console.log(checkEquals([1, 2], [1, 3]))
    console.log(checkEquals([1, 2], [1, 2]))
    console.log(checkEquals([4, 5, 6], [4, 5, 6]))
    console.log(checkEquals([4, 7, 6], [4, 5, 6]))

/* Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.

dis(1500, 50) ➞ 750

dis(89, 20) ➞ 71.2

dis(100, 75) ➞ 25 */

const dis = (price,discountPercentage) => {
    return (price - (price*discountPercentage/100))
}

console.log(dis(1500, 50))
console.log(dis(89, 20))
console.log(dis(100, 75))

/* Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
add_ly = add_suffix("ly")

add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞"totally"

add_less = add_suffix("less")

add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless" */

const add_suffix = (suffix,...args) => {
    const str = args 
    return function (str) {
        return str.concat(suffix)
    }
}

add_ly = add_suffix("ly")
console.log(add_ly("total"))


add_less = add_suffix("less")
console.log(add_less("fear"))
console.log(add_less("ruth"))

/* Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

Examples
let circy = new Circle(11);
circy.getArea();

// Should return 380.132711084365

let circy1 = new Circle(4.44);
circy.getPerimeter();

// Should return 27.897342763877365 */

function Circle(radius) {
    this.radius = radius;
    this.getArea = () => (Math.PI*(Math.pow(radius,2)))
    this.getPerimeter = () => (Math.PI*2*radius)
}

let circy = new Circle(11);
console.log(circy.getArea())
let circy1 = new Circle(4.44);
console.log(circy1.getPerimeter())

/* You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!" */

const findNemo = (str) => {
    const strToArr = str.split(' ')
    const arrOfNemoAndIndex = []
    for(let i=0;i<strToArr.length;i++) {
        (strToArr[i] === "Nemo") ? arrOfNemoAndIndex.push(strToArr[i],i + 1) : null
    }
    return `I found Nemo at ${arrOfNemoAndIndex[1]}!`
}

console.log(findNemo("I am finding Nemo !"))
console.log(findNemo("Nemo is me"))
console.log(findNemo("I Nemo am"))

/* Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!" */

const calculator = (num1,mathOperator,num2) => {
    if(num2 == 0) {return "Can`t divide by 0!"}
    return eval(num1 + mathOperator + num2)
}

console.log(calculator(4,"*",0))
console.log(calculator(2, "+", 2))
console.log(calculator(2, "*", 2))
console.log(calculator(4, "/", 2))

/* You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

Examples
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
} ➞ 100

const stolenItems = {
  painting: 20000,
} ➞ 20000

const stolenItems = {} ➞ "Lucky you!"
Notes
The item value is always positive. */

const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  }
  
const stolenItems1 = {}

const calcStolenItems = (stolenItems) => {
    const objValues = Object.values(stolenItems)
    if(objValues.length === 0) {return "Lucky you!"}
    const reducer = (acc,currVal) => acc + currVal
    return objValues.reduce(reducer)
}

console.log(calcStolenItems(stolenItems))
console.log(calcStolenItems(stolenItems1))

/* Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt" */

const capToFront = (str) => {
    const arrOfLetters = str.split('')
    const arrOfCapitals = [];
    const arrOfLowers = [];
    arrOfLetters.map(l => (l == l.toUpperCase()) ? arrOfCapitals.push(l) : arrOfLowers.push(l) )
    const finalArr = arrOfCapitals.concat(arrOfLowers)
    return finalArr.join('')
}

console.log(capToFront("olleH"))
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))

/* Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

Examples
testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false */

const testJackpot = (arr) => {
   return arr.every( val => val === arr[0])
}

console.log(testJackpot(["@", "@", "@", "@"]))
console.log(testJackpot(["abc", "abc", "abc", "abc"]))
console.log(testJackpot(["SS", "SS", "SS", "SS"]))
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))
console.log(testJackpot(["SS", "SS", "SS", "Ss"]))

/* Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

The formula to calculate the temperature in Fahrenheit from Celsius is:

F = C*9/5 +32
The formula to calculate the temperature in Kelvin from Celsius is:

K = C + 273.15
Examples
tempConversion(0) ➞ [32, 273.15]
// 0°C is equal to 32°F and 273.15 K.

tempConversion(100) ➞ [212, 373.15]

tempConversion(-10) ➞ [14, 263.15]

tempConversion(300.4) ➞ [572.72, 573.55] */

const tempConversion = (tempInCelsius) => {
    const tempArr = []
    const tempToFahrenheit = tempInCelsius*9/5 + 32
    const tempToKelvin = tempInCelsius + 273.15
    tempArr.push(tempToFahrenheit,tempToKelvin)
    return tempArr
}

console.log(tempConversion(0))
console.log(tempConversion(100))
console.log(tempConversion(-10))
console.log(tempConversion(300.4))

/* An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

Examples
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8. */

const isSpecialArray = (arr) => {
   const final = arr.filter((num,i) => (num%2===0 && i%2===0) || (num%2!==0 && i%2!==0))
   if (final.length === arr.length) {return true}
   if(final.length !== arr.length) {return false}
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]))
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]))
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]))

/* Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
Examples
removeLeadingTrailing("230.000") ➞ "230" ---> FIX FOR THIS !!!
 
removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"
Notes
Return a string.
If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
If the number is 0, 0.0, 000, 00.00, etc... return "0". */

const removeLeadingTrailing = (str) => {
    const splitAtDecimalPoint =  str.split('.')
    const numBiggerTHanZero = num => num>0
    if(splitAtDecimalPoint.length === 1) {
        const firstNumIndex = splitAtDecimalPoint[0].split('').findIndex(numBiggerTHanZero)
        return splitAtDecimalPoint[0].slice(firstNumIndex)
    }
    if(splitAtDecimalPoint.length === 2) {
        const firstNumIndex = splitAtDecimalPoint[0].split('').findIndex(numBiggerTHanZero)
        const firstPart = splitAtDecimalPoint[0].slice(firstNumIndex).concat('.')
        const secondPart = splitAtDecimalPoint[1].split('').reverse()
        const secondNumIndex = secondPart.findIndex(numBiggerTHanZero)
        const secondPartFinal = secondPart.slice(secondNumIndex).reverse().join('')
        return firstPart.concat(secondPartFinal)
    }
}

console.log(removeLeadingTrailing("00000235.340100"))
console.log(removeLeadingTrailing("230.000")) /* FIX FOR THIS !!!*/
console.log(removeLeadingTrailing("00402"))
console.log(removeLeadingTrailing("03.1400"))
console.log(removeLeadingTrailing("30"))


/* Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

Examples
totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

totalVolume([1, 1, 1]) ➞ 1
Notes
You will be given at least one box.
Each box will always have three dimensions included. */

const totalVolume = (arrayOfBoxes) => {
    if(arrayOfBoxes.length===1) {
        const innerArr = arrayOfBoxes[0]
        let result = 1
        for(let i=0;i<innerArr.length;i++) {
            result*=innerArr[i]
        }
        return result
    }
    else {
        let finalResult = 0;
        for(let i=0;i<arrayOfBoxes.length;i++) {
            let inner = arrayOfBoxes[i]
            let result = 1
            for(let j=0;j<inner.length;j++) {
                result*=inner[j]
            }
            
            finalResult+=result
        }
        return finalResult
    }
}

console.log(totalVolume([[1,3,9,12]]))
console.log(totalVolume([[1,1,1]]))
console.log(totalVolume([[2, 2, 2], [5, 5, 5]]))
console.log(totalVolume([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]]))
console.log(totalVolume([[2, 2, 2], [2, 1, 1]]))

/* A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.

If we have cities A, B and C, possible paths would be:

A -> B -> C
A -> C -> B
B -> A -> C
B -> C -> A
C -> B -> A
C -> A -> B
... which gives us 6 as the possible number of paths.

Examples
paths(4) ➞ 24

paths(1) ➞ 1

paths(9) ➞ 362880 */

const paths = (num) => {
    let result = 1
    for(let i=1;i<=num;i++) {
        result *= i
    }
    return result
}

console.log(paths(1))
console.log(paths(4))
console.log(paths(9))
/* 
Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414 */

const squareDigits = (num) => {
    return num.toString().split('').map(str => parseInt(str*str)).join('')
}

console.log(squareDigits(9119))
console.log(squareDigits(2483))
console.log(squareDigits(3212))

/* Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

Examples
indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3) */

const indexMultiplier = (arr) => {
    let result = 0
    arr.map((num,i) => result+= num*i)
    return result
}

console.log(indexMultiplier([1, 2, 3, 4, 5]))
console.log(indexMultiplier([-3, 0, 8, -6]))

/* Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

Examples
isTriplet(3, 4, 5) ➞ true
// 3² + 4² = 25
// 5² = 25

isTriplet(13, 5, 12) ➞ true
// 5² + 12² = 169
// 13² = 169

isTriplet(1, 2, 3) ➞ false
// 1² + 2² = 5
// 3² = 9 */

const isTriplet = (num1,num2,num3) => {
    let arr = []
    arr.push(num1,num2,num3)
    const sortedAscending = arr.sort((a,b)=>a-b)
    console.log(sortedAscending)
    const isNum3 = Math.sqrt(Math.pow(sortedAscending[0],2) + Math.pow(sortedAscending[1],2))
    if(isNum3 === sortedAscending[2]) {return true} else {return false}
}

console.log(isTriplet(3, 4, 5))
console.log(isTriplet(13, 5, 12))
console.log(isTriplet(1, 2, 3))

/* Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
coneVolume(3, 2) ➞ 12.57

coneVolume(15, 6) ➞ 565.49

coneVolume(18, 0) ➞ 0 */

const coneVolume = (h,r) => {
    return (Math.PI*h*Math.pow(r,2))/3
}

console.log(coneVolume(3, 2))
console.log(coneVolume(15, 6))
console.log(coneVolume(18, 0))

/* Write a function called linearSearch which accepts an array and a value,and returns the index at which the value exists.If the value does not exist in the array,return -1.

Dont use indexOf to implement this function! */

const linearSearch = (arr,val) => {
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === val) {return i}
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5],9))
/* 
Binary Search */

const binarySearch = (sortedArr,val) => {
    let i =0
    let k = sortedArr.length-1
    let j=Math.floor((i+k)/2)
    while(sortedArr[j]!== val && i<=k) {
        
        if(val < sortedArr[j]) {
            k = j-1
        } else {
            i = j+1
        }
        j=Math.floor((i+k)/2)
    }
    return sortedArr[j] === val ? j : -1
    
}

binarySearch([1,2,3,4,5],3) 

/* 
const button = document.getElementById("button")
button.addEventListener("click", () => {
    debugger
    binarySearch([1,2,3,4,5],3)
    
}) */

/* Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right). */


const traceMatrix = (arr) => {
    let result = 0 
    let initialIndex = 0
    for (let i=0;i<arr.length;i++) {
        result += (arr[i])[initialIndex]
        initialIndex+=1
    }
    return result
}

console.log(traceMatrix([[1,2,3],[4,5,6],[7,8,9]]))
console.log(traceMatrix([[1,4],[1,4]]))

/* Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors. */

/* factorGroup(33) ➞ "even"

factorGroup(36) ➞ "odd"

factorGroup(7) ➞ "even" */

const factorGroup = (num) => {
    let numOfFactors = []
    for(let i=1;i<=num;i++) {
        if(num%i===0) {numOfFactors.push(i)}
    }
    if(numOfFactors.length % 2 === 0) {return "even"}
    else {return "odd"}
}

console.log(factorGroup(36))
console.log(factorGroup(33))
console.log(factorGroup(7))

/* Create the function that takes an array with objects and returns the sum of people's budgets.
getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]) ➞ 65700
  
  getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]) ➞ 62600 */

  const getBudgets = (arr) => {
    const arrOfBudgets = arr.map(item => item.budget)
    let totalBudget = 0
    for(let i=0;i<arrOfBudgets.length;i++) {
        totalBudget +=arrOfBudgets[i]
    }
    return totalBudget
  }

  console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]))

  console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]))

/*   Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

Examples
numbersSum([1, 2, "13", "4", "645"]) ➞ 3

numbersSum([true, false, "123", "75"]) ➞ 0

numbersSum([1, 2, 3, 4, 5, true]) ➞ 15 */

const numbersSum = (arr) => {
    let sumOfNumbers = 0
    for(let i=0;i<arr.length;i++) {
       if(typeof(arr[i]) == "number") {
            sumOfNumbers += arr[i]
       }
    }
    return sumOfNumbers;
}

console.log(numbersSum([1, 2, "13", "4", "645"]))
console.log(numbersSum([true, false, "123", "75"]))
console.log(numbersSum([1, 2, 3, 4, 5, true]))

/* Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction. */
/* spinAround(["left", "right", "left", "right"]) ➞ 0

spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) ➞ 2

spinAround(["left", "left", "left", "left"]) ➞ 1 */

const spinAround = (arr) => {
    let result = 0
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === "left") {result +=-1}
        else {result += 1}
    }
    return Math.abs(result/4)
}

console.log(spinAround(["left", "right", "left", "right"]))
console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]))
console.log(spinAround(["left", "left", "left", "left"]))


/* Create a function that takes an integer n and reverses it.

Examples
rev(5121) ➞ "1215"

rev(69) ➞ "96"

rev(-122157) ➞ "751221" */

const rev = (num) => {
    return num.toString().split('').reverse().join('')
}

console.log(rev(5121))
console.log(rev(69))
console.log(rev(-122157))

/* Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.

Examples
numberLenSort([1, 54, 1, 2, 463, 2]) ➞ [1, 1, 2, 2, 54, 463]

numberLenSort([999, 421, 22, 990, 32]) ➞ [22, 32, 999, 421, 990]

numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]) ➞ [9, 8, 7, 6, 5, 4, 2, 1, 3, 31] */

const numberLenSort = (arr) => {
    let singleDigit = []
    let doubleDigit = []
    let tripleDigit = []
    for(let i=0;i<arr.length;i++) {
        if (arr[i].toString().length === 1) { singleDigit.push(arr[i])}
        if(arr[i].toString().length === 2) {doubleDigit.push(arr[i])}
        if(arr[i].toString().length > 2) {tripleDigit.push(arr[i])}
        
    }
    return singleDigit.concat(doubleDigit,tripleDigit)
    
}

console.log(numberLenSort([1, 54, 1, 2, 463, 2]))
console.log(numberLenSort([999, 421, 22, 990, 32]))
console.log(numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]))




/* Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

Examples
jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

jazzify([]) ➞ [] */


const jazzify = (arr) => {
    if(arr === []) return arr
    let finalArr = []
    for(let i=0;i<arr.length;i++) {
        if(arr[i].slice(-1) !== "7") {
            finalArr.push(arr[i].concat("7"))
        } else {
            finalArr.push(arr[i])
        } 
    }
    return finalArr
}


console.log(jazzify(["G", "F", "C"]))
console.log(jazzify(["Dm", "G", "E", "A"]))
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]))
console.log([])

/* A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false */

const factorChain = (arr) => {
    let newArr = [arr[0]]
    for(let i=1;i<arr.length;i++){
        if(arr[i] % newArr.slice(-1) === 0) { newArr.push(arr[i])}
    }
    if(newArr.length === arr.length) {return true} else {return false}
}

console.log(factorChain([1, 2, 4, 8, 16, 32]))
console.log(factorChain([1, 1, 1, 1, 1, 1]))
console.log(factorChain([2, 4, 6, 7, 12]))
console.log(factorChain([10, 1]))


/* Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

Examples
removeDups([1, 0, 1, 0]) ➞ [1, 0]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
Notes
Tests contain arrays with both strings and numbers.
Tests are case sensitive.
Each array item is unique. */

const removeDups = (arr) => {
    let arrWithoutDuplicates = []
    for(let i=0;i<arr.length;i++) {
        if(arrWithoutDuplicates.indexOf(arr[i]) === -1) {
            arrWithoutDuplicates.push(arr[i])
        }
    }
    return arrWithoutDuplicates
}

console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))


/* Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

Return true if the marathon is 25 miles long, otherwise, return false.

Examples
marathonDistance([1, 2, 3, 4]) ➞ false

marathonDistance([1, 9, 5, 8, 2]) ➞ true

marathonDistance([-6, 15, 4]) ➞ true
Notes
Items in the array will always be integers.
Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
Return false if the arguments are empty or not provided. */

const marathonDistance = (arr) => {
    let total =0
    for(let i=0;i<arr.length;i++) {
        if(arr[i] < 0) {arr[i] = Math.abs(arr[i])}
        total+=arr[i]
    }
    if(total === 25) return true
    else return false
}

console.log(marathonDistance([1, 2, 3, 4]))
console.log(marathonDistance([1, 9, 5, 8, 2]))
console.log(marathonDistance([-6, 15, 4]))


/* 
 Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. The desired output should be given in kg and rounded to two decimal places.

How to solve:

Calculate the volume of the cylinder.
Convert cm³ into dm³.
1dm³ = 1L, 1L is 1Kg.
Examples
weight(4, 10) ➞ 0.5

weight(30, 60) ➞ 169.65
 
weight(15, 10) ➞ 7.07 */

const weight = (num1,num2) => {
    return Math.PI * Math.pow(num1,2) * num2/1000
}

console.log(weight(4, 10))
console.log(weight(30, 60))
console.log(weight(15, 10))


/* Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

To illustrate:

123
We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

Examples
reverseAndNot(123) ➞ 321123

reverseAndNot(152) ➞ 251152

reverseAndNot(123456789) ➞ 987654321123456789
Notes
i is a non-negative integer. */

const reverseAndNot = (num) => {
    const toString = num.toString()
    const reversedString = toString.split('').reverse().join('')
    return parseInt(toString.concat(reversedString))
}

console.log(reverseAndNot(123))
console.log(reverseAndNot(152))
console.log(reverseAndNot(123456789))

/* In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.

Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.

Examples
isSastry(183) ➞ true
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)

isSastry(184) ➞ false
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square

isSastry(106755) ➞ true
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2) */

const isSastry = (num) => {
    const nextNum = num + 1
    const numToString = num.toString()
    const nextNumToString = nextNum.toString()
    const concatNumbers = parseInt(numToString.concat(nextNumToString))
    if (Math.sqrt(concatNumbers) % 1 === 0) {return true} else {return false}
}

console.log(isSastry(183))
console.log(isSastry(184))
console.log(isSastry(106755))

/* Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.
Examples
ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4] */


const ascDesNone = (arr,str) => {
    if(str ==="Asc") {return arr.sort((a,b) => a-b)}
    if(str === "Des") {return arr.sort((a,b) => b-a)}
    if(str === "None") return arr
}

console.log(ascDesNone([4, 3, 2, 1], "Asc" ))
console.log(ascDesNone([7, 8, 11, 66], "Des"))
console.log(ascDesNone([1, 2, 3, 4], "None"))


/* Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

Examples
evenlyDivisible(1, 10, 20) ➞ 0
// No number between 1 and 10 can be evenly divided by 20.

evenlyDivisible(1, 10, 2) ➞ 30
// 2 + 4 + 6 + 8 + 10 = 30

evenlyDivisible(1, 10, 3) ➞ 18
// 3 + 6 + 9 = 18 */


const evenlyDivisible = (a,b,c) => {
    if (b<c) return 0
    if(c<b) {
        let divisibleByC=[]
        for(let i=a;i<=b;i++) {
            if(i % c === 0) {divisibleByC.push(i)}
        }
        let result = 0;
        for(let j=0;j<divisibleByC.length;j++) {
            result += divisibleByC[j]
        }
        return result
    }
}

console.log(evenlyDivisible(1, 10, 20))
console.log(evenlyDivisible(1, 10, 2))
console.log(evenlyDivisible(1, 10, 3))


/* Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

Return a boolean value (true or false).
The string can contain any character.
When "x" and "o" are not in the string, return true.
Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false */


const XO = (str) => {
    const arrOfletters = str.split('')
    let arrOfO = []
    let arrOfX = []
    for(let i=0;i<arrOfletters.length;i++) {
        if(arrOfletters[i].toLowerCase() === "o") {arrOfO.push(arrOfletters[i])}
        if(arrOfletters[i].toLowerCase() === 'x') {arrOfX.push(arrOfletters[i])}
    }
    if(arrOfO.length === arrOfX.length) return true
    else return false 
}

console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo"))


/* Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7] */


const uniqueSort = (arr) => {
    let uniqueArr = []
    for(let i=0;i<arr.length;i++) {
        if(uniqueArr.indexOf(arr[i]) === -1) {uniqueArr.push(arr[i])}
    }
    return uniqueArr.sort((a,b) => a-b) 
}

console.log(uniqueSort([1, 2, 4, 3]))
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))
console.log(uniqueSort([6, 7, 3, 2, 1]))

/* To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

Examples
progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

progressDays([10, 11, 12, 9, 10]) ➞ 3

progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

progressDays([9, 9])  ➞ 0 */


const progressDays = (arr) => {
    let prevNum = arr[0]
    let counter = 0
    for(let i=1;i<arr.length;i++) {
        if(arr[i] > prevNum) {
            prevNum=arr[i]
            counter++
        } else {
            prevNum=arr[i]
        }
    }
    return counter
}

console.log(progressDays([3, 4, 1, 2]))
console.log(progressDays([10, 11, 12, 9, 10]))
console.log(progressDays([6, 5, 4, 3, 2, 9]))
console.log(progressDays([9, 9]))



/* Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep" */

const specialReverse = (str,letter) => {
    const wordsArr = str.split(' ')
    for(let i=0;i<wordsArr.length;i++) {
        if(wordsArr[i].slice(0,1) === letter) {
            wordsArr[i] = wordsArr[i].split('').reverse().join('')
        }
    } 
    return wordsArr.join(' ')
}

console.log(specialReverse("word searches are super fun","s"))
console.log(specialReverse("first man to walk on the moon", "m"))
console.log(specialReverse("peter piper picked pickled peppers", "p"))



/* Create a function that returns the mean of all digits.

Examples
mean(42) ➞ 3

mean(12345) ➞ 3

mean(666) ➞ 6 */

const mean = (num) => {
    const numToString = num.toString()
    let result = 0
    for(let i=0;i<numToString.length;i++) {
        result += parseInt(numToString[i])
    }
    return result / numToString.length
}

console.log(mean(42))
console.log(mean(12345))
console.log(mean(666))

/* 
Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA" */


const makeTitle = (str) => {
    let wordsArr = str.split(' ')
    let capitalizeWordsArr = []
    for(let i=0;i<wordsArr.length;i++) {
        let capitalLetter = wordsArr[i].toString()[0].toUpperCase()
        capitalizeWordsArr.push(capitalLetter.concat(wordsArr[i].slice(1,wordsArr[i].length))) 
    }
    return capitalizeWordsArr.toString().split(',').join(' ')
    
}

console.log(makeTitle("This is a title"))
console.log(makeTitle("capitalize every word"))
console.log(makeTitle("I Like Pizza"))
console.log(makeTitle("PIZZA PIZZA PIZZA"))  



/* Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

Examples
capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"] */


const capMe = (arr) => {
    let arrOfCapitalizedWords = []
    for(let i=0;i<arr.length;i++) {
        arrOfCapitalizedWords.push(arr[i][0].toUpperCase().concat(arr[i].slice(1,arr[i].length).toLowerCase()))
    }
    return arrOfCapitalizedWords
}

console.log(capMe(["mavis", "senaida", "letty"]))
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]))
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]))


/* Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

Examples
equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0 */

const equal = (a,b,c) => {
    let counter = 0
    if(a === b ) {counter ++}
    if( a === c) {counter ++}
    if(b === c) {counter ++}
    if(counter === 1) return counter+1
    return counter
}

console.log(equal(3, 4, 3))
console.log(equal(1, 1, 1))
console.log(equal(3, 4, 1))

/* ===============================================================
/* HARD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
/* ===============================================================  */

/* Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!" */

const sevenBoom = (arr) => {
    let returnString = 'no 7 found!'
    for(let i=0;i<arr.length;i++) {
        if(arr[i].toString().indexOf('7') !== -1) { returnString = 'Boom!'}
        }
    return returnString
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86]))


/* A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
Examples
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0 */

const countBoomerangs = (arr) => {
    let counter = 0
   for(let i=0;i<arr.length;i++) {
        let chunkOfThree = arr.slice(i,i+3)
        if(chunkOfThree[0] === chunkOfThree[2] && chunkOfThree.length=== 3 && chunkOfThree[1] !== chunkOfThree[0]) {
            counter ++
        }
    }
    return counter
}

console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]))
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]))



/* An array that represents a Binary Tree is in the following form:

binaryTree = [val, arrLeft, arrRight]
When arrLeft is the left side of the tree and arrRight is the right side of the tree.

To illustrate:

const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// arr1 represents the following Binary Tree:

                    3
                   / \
                  8   7
                 /\   /\
                5  N N  N
               /\
               N N

// Where N represents null.
Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.

Examples
valueInTree(arr1, 5) ➞ true

valueInTree(arr1, 9) ➞ false
 */
/* valueInTree(arr1, 51) ➞ false */

const arr11 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

const valueInTree = (arr,num) => {
    let bool = false
    for(let i=0;i<arr.length;i++) {
       if(arr[i] instanceof Array) {
            for(let j=0;j<arr[i].length;j++) {
                if(parseInt(arr[i][j]) === num) {bool = true}
                }
            } 
        if(arr[i] instanceof String && parseInt(arr[i]) === num) {bool = true}
    }
    return bool
}

console.log(valueInTree(arr11, 5))
console.log(valueInTree(arr11, 9))
console.log(valueInTree(arr11, 91))
console.log(valueInTree(arr11, 8))
console.log(valueInTree(arr11, 7))


/* Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"

oddishOrEvenish(373) ➞ "Oddish"

oddishOrEvenish(4433) ➞ "Evenish" */

const oddishOrEvenish = (num) => {
    const numToString = num.toString()
    const arrOfSingleDigits = numToString.split('').map(digit => parseInt(digit,10))
    let sumOfDigits = 0
    for(let i=0;i<arrOfSingleDigits.length;i++) {
        sumOfDigits+=arrOfSingleDigits[i]
    }
    if(sumOfDigits%2 === 0) return "Evenish"
    else return "Oddish"
    
}

console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))


/* The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Examples
getLength([1, [2, 3]]) ➞ 3

getLength([1, [2, [3, 4]]]) ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

getLength([1, [2], 1, [2], 1]) ➞ 5
Notes
An empty array should return 0. */

const getLength = arr => arr.flat(Infinity).length;

console.log(getLength([1, [2, 3]]))
console.log(getLength([1, [2, [3, 4]]]))
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))
console.log(getLength([1, [2], 1, [2], 1]))

/* Write a function that takes an array of arrays and returns the value of all of the symbols in it, where each symbol adds or takes something from the total score. Symbol values:

# = 5
O = 3
X = 1
! = -1
!! = -3
!!! = -5
An array of arrays containing 2 #s, a O, and a !!! would equal (0 + 5 + 5 + 3 - 5) 8.

If the final score is negative, return 0 (e.g. 3 #s, 3 !!s, 2 !!!s and a X would be (0 + 5 + 5 + 5 - 3 - 3 - 3 - 5 - 5 + 1) -3, so return 0.

Examples
checkScore([
  ["#", "!"],
  ["!!", "X"]
]) ➞ 2

checkScore([
  ["!!!", "O", "!"],
  ["X", "#", "!!!"],
  ["!!", "X", "O"]
]) ➞ -1

checkScore([
  ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
  ["!!!", "!!!", "!!", "!!", "!", "!", "X", "!", "!!!", "O", "!", "!!!", "X", "#"],
  ["#", "X", "#", "!!!", "!", "!!", "#", "#", "!!", "X", "!!", "!!!", "X", "O"],
  ["!!", "X", "!!", "!!", "!!!", "#", "O", "O", "!!!", "#", "O", "O", "#", "!!"],
  ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
  ["!!", "!!!", "X", "!!!", "!!", "!!", "!!!", "X", "O", "!", "#", "!!", "!!", "!!!"],
  ["!!", "!!", "#", "O", "!", "!!", "!", "!!!", "#", "O", "#", "!", "#", "!!"],
  ["X", "X", "O", "X", "!!!", "#", "!!!", "!!!", "X", "X", "X", "!", "#", "!!"],
  ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
  ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
  ["!", "!!", "!!", "O", "!!", "!!", "#", "#", "!", "!!!", "O", "!", "#", "#"],
  ["!", "!!!", "!!", "X", "!!", "!!", "#", "!!!", "O", "!!", "!!!", "!", "!", "!"],
  ["!!!", "!!!", "!!", "O", "!", "!", "!!!", "!!!", "!!", "!!", "X", "!", "#", "#"],
  ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"]
]) ➞ 12
Notes
Strings in the arrays will only be #, O, X, !, !! and !!!. */

const checkScore = (arr) => {
    let score = 0
    for (let i=0;i<arr.length;i++) {
        for(let j=0;j<arr[i].length;j++) {
            if(arr[i][j] === "#") score += 5
            if(arr[i][j] === "O") score += 3
            if(arr[i][j] === "X") score += 1
            if(arr[i][j] === "!") score += -1
            if(arr[i][j] === "!!") score += -3
            if(arr[i][j] === "!!!") score += -5

        }
                }
    return score
}

console.log(checkScore([
    ["#", "!"],
    ["!!", "X"]
  ]))
console.log(checkScore([
    ["!!!", "O", "!"],
    ["X", "#", "!!!"],
    ["!!", "X", "O"]
  ]))
console.log(checkScore([
    ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
    ["!!!", "!!!", "!!", "!!", "!", "!", "X", "!", "!!!", "O", "!", "!!!", "X", "#"],
    ["#", "X", "#", "!!!", "!", "!!", "#", "#", "!!", "X", "!!", "!!!", "X", "O"],
    ["!!", "X", "!!", "!!", "!!!", "#", "O", "O", "!!!", "#", "O", "O", "#", "!!"],
    ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
    ["!!", "!!!", "X", "!!!", "!!", "!!", "!!!", "X", "O", "!", "#", "!!", "!!", "!!!"],
    ["!!", "!!", "#", "O", "!", "!!", "!", "!!!", "#", "O", "#", "!", "#", "!!"],
    ["X", "X", "O", "X", "!!!", "#", "!!!", "!!!", "X", "X", "X", "!", "#", "!!"],
    ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
    ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
    ["!", "!!", "!!", "O", "!!", "!!", "#", "#", "!", "!!!", "O", "!", "#", "#"],
    ["!", "!!!", "!!", "X", "!!", "!!", "#", "!!!", "O", "!!", "!!!", "!", "!", "!"],
    ["!!!", "!!!", "!!", "O", "!", "!", "!!!", "!!!", "!!", "!!", "X", "!", "#", "#"],
    ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"]
  ]))




/*   Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

Examples
doesBrickFit(1, 1, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 2, 1, 1) ➞ false
Notes
You can turn the brick with any side towards the hole.
We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
You can't put a brick in at a non-orthogonal angle. */

const doesBrickFit = (a,b,c,w,h) => {
    const brickDimensionsArr = [a,b,c]
    let allParams = []
    const wholeParam=w*h
    for(let i=0;i<brickDimensionsArr.length;i++) {
        if(i<2) {allParams.push(brickDimensionsArr[i]*brickDimensionsArr[i+1])}
        else {allParams.push(brickDimensionsArr[2]*brickDimensionsArr[0])}
    }
    const arrOfParamsThatFit = allParams.filter(i => i <= wholeParam)
    if(arrOfParamsThatFit.length !== 0) return true
    else return false
}
    


console.log(doesBrickFit(1, 1, 1, 1, 1))
console.log(doesBrickFit(1, 2, 1, 1, 1))
console.log(doesBrickFit(1, 2, 2, 1, 1))





/* 
Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

Examples
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
Notes
Arrays are sorted. */



const commonElements = (arr1,arr2) => {
    let commonNumbers = []
    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length;j++) {
            if(arr1[i] === arr2[j]) {
                if(commonNumbers.indexOf(arr1[i]) === -1) {
                    commonNumbers.push(arr1[i])
                }
            }
        }
    }
    return commonNumbers
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]))
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]))



/* From point A, an object is moving towards point B at constant velocity va (in km/hr). From point B, another object is moving towards point A at constant velocity vb (in km/hr). Knowing this and the distance between point A and B (in km), write a function that returns how much time passes until both objects meet.

Format the output like this:

"2h 23min 34s"
Examples
letsMeet(100, 10, 30) ➞ "2h 30min 0s"

letsMeet(280, 70, 80) ➞ "1h 52min 0s"

letsMeet(90, 75, 65) ➞ "0h 38min 34s" */


const letsMeet = (distance,va,vb) => {
    const num = distance/(va+vb)
    const hour = Math.floor((distance/(va+vb)))
    const minutes = Math.floor((num - hour)*60)
    const seconds = Math.floor((minutes - Math.floor(minutes))*60)
    return `${hour}h ${minutes}min ${seconds}s`
}

console.log(letsMeet(100, 10, 30))
console.log(letsMeet(280, 70, 80))
console.log(letsMeet(90, 75, 65))


/* Abigail and Benson are playing Rock, Paper, Scissors.

Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

R stands for Rock
P stands for Paper
S stands for Scissors
Examples
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Ben wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie" */


const calculateScore = (arr) => {
    let AbiScore = 0
    let BenScore = 0
    for(var i=0;i<arr.length;i++) {
        if(arr[i][0] === 'R' && arr[i][1] === 'P') {
            BenScore++
        }
        if(arr[i][0] === 'R' && arr[i][1] === 'S') {
            AbiScore++
        }
        if(arr[i][0] === 'P' && arr[i][1] === 'R') {
            AbiScore++
        }
        if(arr[i][0] === 'P' && arr[i][1] === 'S') {
            BenScore++
        }
        if(arr[i][0] === 'S' && arr[i][1] === 'R') {
            BenScore++
        }
        if(arr[i][0] === 'S' && arr[i][1] === 'P') {
            AbiScore++
        }
    }
    if(AbiScore > BenScore) {return 'Abigail'}
    if(AbiScore < BenScore) {return 'Benson'}
    if(AbiScore === BenScore) {return 'Tie'}
}

console.log(calculateScore([["R", "R"], ["S", "S"]]))
console.log(calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]))
console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]))

/* Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used. */

const reverseOdd = (str) => {
    let strToArrOfWords = str.split(' ')
    let arrOfProcessedString = []
    for(let i=0;i<strToArrOfWords.length;i++) {
        if(strToArrOfWords[i].length % 2 !== 0) {
            arrOfProcessedString.push(strToArrOfWords[i].split('').reverse().join(''))
        } else {
            arrOfProcessedString.push(strToArrOfWords[i])
        } 
    }
    return arrOfProcessedString.join(' ')
}

console.log(reverseOdd("Bananas"))
console.log(reverseOdd("One two three four"))




/* Remember the game Battleship? Ships are floating in a matrix. You have to fire torpedos at their suspected coordinates, to try and hit them. */

/* Create a function that takes an array of arrays (matrix) and a coordinate as a string. If the coordinate contains only water " . ", return "splash" and if the coordinate contains a ship " * ", return "BOOM".

Examples
[
  [".", ".", ".", "*", "*"],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", ".", "*", "*", "."],
]

fire(matrix, "A1") ➞ "splash"

fire(matrix, "A4") ➞ "BOOM"

fire(matrix, "D2") ➞ "BOOM"
Notes
The provided matrix is always a square.
The provided matrix will not be larger than 5 * 5 ( A1 * E5). */

const matrix = [
    [".", ".", ".", "*", "*"],
    [".", "*", ".", ".", "."],
    [".", "*", ".", ".", "."],
    [".", "*", ".", ".", "."],
    [".", ".", "*", "*", "."],
  ]

const fire = (arr,str) => {
    if(str[0] === "A") {
        for(let i=0;i<arr[0].length;i++) {
            if(arr[0][i] === parseInt(str[1] - 1) && arr[0][i] === '*') { return 'BOOM'}
            else { return 'splash'}
        } 
    }
    if(str[0] === 'B') {
        for(let i=0;i<arr[1].length;i++) {
            if(arr[1][i] === parseInt(str[1] - 1)  && arr[1][i] === '*') { return 'BOOM'}
            else { return 'splash'}
        } 
    }
    if(str[0] === 'C') {
        for(let i=0;i<arr[2].length;i++) {
            if(arr[2][i] === parseInt(str[1] - 1)  && arr[2][i] === '*') { return 'BOOM'}
            else { return 'splash'}
        } 
    }
    if(str[0] === 'D') {
        for(let i=0;i<arr[3].length;i++) {
            if(arr[3][i] === parseInt(str[1] - 1)  && arr[3][i] === '*') { return 'BOOM'}
            else { return 'splash'}
        } 
    }
    if(str[0] === 'E') {
        for(let i=0;i<arr[4].length;i++) {
            if(arr[4][i] === parseInt(str[1] - 1)  && arr[4][i] === '*') { return 'BOOM'}
            else { return 'splash'}
        } 
    }
}

console.log(fire(matrix,"A1"))
console.log(fire(matrix,"A4"))
console.log(fire(matrix,"D2"))





/* Create a function to generate all string character permutations.

Examples
permutations("AB") ➞ "AB BA"

permutations("CD") ➞ "CD DC"

permutations("ABC") ➞ "ABC ACB BAC BCA CBA CAB"

permutations("BFG") ➞ "BFG BGF FBG FGB GFB GBF"
Notes
Do not omit duplicates. */