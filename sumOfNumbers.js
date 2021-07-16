/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/



function getSum( a, b ) {
    let rollingSum = 0
    if (a < b) {
      for(let i = a; i <= b; i++) {
      rollingSum += i
      }
    } else {
      for(let i = b; i <= a; i++) {
      rollingSum += i
      }
    }
    return rollingSum
  }
  getSum(1,0)
  getSum(5,0)
  getSum(5,15)
  getSum(6,0)
  