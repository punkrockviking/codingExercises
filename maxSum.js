/**********************************************************
 * interview 3 with PAT
 */



var list = [2, 3, -6, 3, 4, -5, -4, -5];
// var list2 = [2, -3, 6, 3, -4, 5, 4, -5];

// Find the max sum of contiguous integers in the array


//input, output, constraints

//input array of numbers

//output the maximum sum

//constraint numbers have to be contiguous

//create a function
function getMaxSum(numbers) {
  let currentSum = 0
  let maxSum = Number.NEGATIVE_INFINITY;
  
  for(let i = 0; i < numbers.length; i++) {
    currentSum += numbers[i]
    console.log(i, currentSum)
    
    
    // maxSum = Math.max(maxSum, currentSum)
    
    if (currentSum > maxSum) {
      maxSum = currentSum;
      console.log("maxSum", maxSum);
    }
    
    
    
    if (currentSum < 0) {
      console.log("reset")
      currentSum = 0;
    }
  }
   
  return maxSum; 
}
