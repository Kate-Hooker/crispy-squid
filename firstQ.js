// there is an array that can be any length, check to see if k is present in the array and if it is print "YES" if not print "NO"
// arr = array
// k = number
// n = length of array

const testArray = [6, 5, 2, 7, 9, 4, 3, 1, 8, 0]

function findNumber(arr, k) {
  if (arr.includes(k)) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}

findNumber(testArray, 0)
findNumber(testArray, 10)
