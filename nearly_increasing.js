// Make a function that determines if an array is nearly increasing
const test0 = [ 1, 2, 3, 7, 3 ] // yes
const test1 = [ 1, 2, 3, 7, 3, 9 ] // yes
const test2 = [ 5, 1, 2, 3 ] // yes
const test3 = [ 1, 2, 1, 2] // no
const test4 = [ 1, 2, 1, 4, 3, 6 ] // no
const test5 = [ 5, 4, 3, 2, 1] // no
const test6 = [ 1, 3, 2, 1, 5 ] // no
const test7 = [ ] // no
const test8 = [ 1 ] // no

// input array
// output boolean
// constraints array increases, exactly 1 index has to be removed, array must be at least 3 indices, must use only integers, linear time, constant space

function isNearlyIncreasing(arr) {
  let outliers = 0
  for (num = 1; num < arr.length; num++){
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    // console.log(`Is ${arr[num - 1]} < ${arr[num]}?`)
    // console.log(arr[num - 1] < arr[num])

    if (arr[num - 1] < arr[num]) {
      continue
    }
    outliers += 1
    if (outliers === 2) {
      return false
    }
    if (num === 1) {
      continue
    }
    arr[num] = arr[num-1]
    // console.log("Number of Outliers =", outliers)
    // if (arr[num - 2] >= arr[num]) {
    //   return false
    // }
  }
  return (outliers === 1)
}

console.log("test0 result:", isNearlyIncreasing(test0) ? "PASS" : "FAIL")
console.log("test1 result:", isNearlyIncreasing(test1) ? "PASS" : "FAIL")
console.log("test2 result:", isNearlyIncreasing(test2) ? "PASS" : "FAIL")
console.log("test3 result:", !isNearlyIncreasing(test3) ? "PASS" : "FAIL")
console.log("test4 result:", !isNearlyIncreasing(test4) ? "PASS" : "FAIL")
console.log("test5 result:", !isNearlyIncreasing(test5) ? "PASS" : "FAIL")
console.log("test6 result:", !isNearlyIncreasing(test6) ? "PASS" : "FAIL")
console.log("test7 result:", !isNearlyIncreasing(test7) ? "PASS" : "FAIL")
console.log("test8 result:", !isNearlyIncreasing(test8) ? "PASS" : "FAIL")