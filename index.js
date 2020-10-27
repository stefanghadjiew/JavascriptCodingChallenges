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