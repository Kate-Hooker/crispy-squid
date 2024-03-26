// there is an list of numbers starting at 'L' and ending at 'R'.
// these are consective numbers in a list, but you dont know the exact number
// some of these numbers will be odd
// the task is to take all these numbers and publish them in an array

// L = start of list
// R = end of list
// n = number of numbers in the list
// arr = array

// TODO
// put the L to R list in to an array
// create a filter function that takes in the array and returns the odd numbers
originalList = '6,7,8,9,10'
let str = originalList

function stringToIntArray(str) {
  const strArray = str.split(',')
  const intArray = strArray.map((num) => parseInt(num))
  return intArray
}

//function isOdd(num) {
//  return num % 2 !== 0
//}
const intArray = stringToIntArray(str)
//const oddsOnly = intArray.filter(isOdd)
console.log(intArray)
