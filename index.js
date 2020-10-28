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