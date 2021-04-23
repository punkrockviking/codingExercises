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
function canCrossUsingEveryStone(stones) {
  for (let i = 1; i < stones.length - 1; i++) {
    const prevJump = stones[i] - stones[i-1]
    // check if next jump is -1, equal, or + 1
    const nextJump = stones[i+1] - stones[i]
    if (!(nextJump === prevJump || nextJump === prevJump - 1 || nextJump === prevJump + 1)) {
      return false
    } 
  }
  return true
}



function canCrossBySkippingStones(stones) {
    // 3 jump values
  const lastStone = stones[stones.length-1]
  const prevJump = 1
  const currentStone = stones[0]
  const stonesSet = new Set(stones)
  const visitedStones = new Set()
  // converting array to set gives us instant lookup for values, most efficent way to run through array because you only do it one time
  
    // do any of the jumps lead to a stone that is forward in the river?
  // does our jumpDistance +-1 lead to another stone?
  // constraints: jump cant be 0, must lead to forward stone,
//   console.log(stones) 
  function jumpStones(distance, stone) {
    const nextStone = distance + stone
    // console.log(nextStone)
    if (distance === 0) return false
    if (nextStone === lastStone) {
        return true
    }
    // return false if nextStone is not in the stones list
    if (!stonesSet.has(nextStone) || visitedStones.has(`${nextStone},${distance}`)){ 
      // instant lookup within sets
        // console.log('missed stone', nextStone)
        return false
        // THIS IS WHERE IT FAILS, DOES NOT MOVE PAST HERE
    }
    visitedStones.add(`${nextStone},${distance}`)
    // change the values of the current stone and jump distance and plug them in

    //   offsets = [-1, 0, 1]
    //   return offsets.some(offset => jumpStones(distance + offset, nextStone))
    
    //   return jumpStones(distance - 1, nextStone) || jumpStones(distance, nextStone) || jumpStones(distance + 1, nextStone) 
    const sameJumpSucceeds = jumpStones(distance, nextStone)
    if (sameJumpSucceeds) {
        // console.log('samesame')
        return true
    } 
    const shortJumpSucceeds = jumpStones(distance - 1, nextStone)
    if (shortJumpSucceeds) {
        // console.log('short jump return')
        return true
    }
    const longJumpSucceeds = jumpStones(distance + 1, nextStone)
    if (longJumpSucceeds) {
        // console.log('long jump return')
        return true
    }
    return false
  }
  return jumpStones(prevJump, currentStone)
  
    // if so, what do i do with that info?
    // jump as far as possible
    // helper function to make jumps
    // when a jump isnt possible, go back and follow another path
}

function canCross(stones) {
  // if first jump is not 1, fail
  if (stones[1] !== 1) {
    return false
  }
  if (canCrossUsingEveryStone(stones)) return true
  // for each stone check the 3 jump values to see if they lead to another stone
  if (canCrossBySkippingStones(stones)) return true

  return false
}


// how to deal with early return on first jump
// how to cache the stone we already visited
// need to tell if stone is included without using includes method(inefficient)



console.log(canCross(stones))
console.log(canCross(bestStones))
console.log(canCross(failedStones))
// canCrossUsingEveryStone(stones)
// time complexity of 3N instead of the original 3N^3