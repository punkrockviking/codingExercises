/*
A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.
*/

/* 
input: array
output: boolean
constraints: frog can skip stones if needed to cross river
jumps can be -1,at, or +1 from the last jump
*/

/* 
The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone. 
*/

// 0 index is starting point. .length -1 is ending point
// loop through each index first, only go back if there is a failure to see if the frog can skip stones
// decision tree 
const stones = [0,1,3,5,6,8,12,17]
true

const failedStones = [0,1,2,3,4,8,9,11]
false

const bestStones = [0,1,3,5,8,12,17]
// can the frog cross by jumping on every stone?
// loop through each index
  // 0 index is starting point. .length -1 is ending point
function canCrossUsingEveryStone(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    const prevJump = arr[i] - arr[i-1]
    // check if next jump is -1, equal, or + 1
    const nextJump = arr[i+1] - arr[i]
    if (!(nextJump === prevJump || nextJump === prevJump - 1 || nextJump === prevJump + 1)) {
      return false
    } 
  }
  return true
}

function canCrossBySkippingStones(arr) {
    // 3 jump values

    // do any of the jumps lead to a stone that is forward in the river?
    // jump as far as possible
    // helper function to make jumps
    // when a jump isnt possible, go back and follow another path
}

function canCross(arr) {
  // if first jump is not 1, fail
  if (arr[1] !== 1) {
    return false
  }
  if (canCrossUsingEveryStone(arr)) return true
  // for each stone check the 3 jump values to see if they lead to another stone
  if (canCrossBySkippingStones(arr)) return true

  return false
}

// canCrossUsingEveryStone(stones)