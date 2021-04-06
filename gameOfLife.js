// We have a board of 0s and 1s
// 0 is a dead cell
// 1 is a living cell
// If a living cell has less than 2 living neighbors it dies from underpopulation
// If a living cell has 2 or 3 neighbors it continues to live from homeostasis
// If a living cell has more than 3 neighbors it dies from overpopulation
// If a dead cell has exactly 3 neighbors it becomes living from reproduction


const startingGen = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]

const expectedGen = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0]
]

// what makes up a space's neighbors?
//row -1; index -1, same, +1
// same row; index -1, +1
// row +1; index -1, same, +1
// startingGen[1][1]


//helper function that contains the 4 possible outcomes for a space's transformation

class GameOfLife {
  constructor(currentGen) {
    this.currentGen = currentGen
  }

  determineNextGen = () => {
    let nextGen = []
    // for each space
    for (let row = 0; row < this.currentGen.length; row++) {
      for (let col = 0; col < this.currentGen[row].length ; col++) {
        // console.log(this.currentGen[row][col])
        // use sumNeighbors
        const numNeighbors = this.sumNeighbors(row,col)
        // use determineFate
        const willLive = this.determineFate(this.currentGen[row][col], numNeighbors)
        this.nextGen[row][col] = willLive 
      }
    }
    // return nextGen matrix (new)
    return nextGen
  }

  determineFate = (isLiving, numNeighbors) => {
    // use sum to determine fate
    const underpopulation = isLiving && numNeighbors < 2
    const homeostasis = isLiving && (numNeighbors === 2 || numNeighbors === 3)
    const overpopulation = isLiving && numNeighbors > 3
    const reproduction = !isLiving && numNeighbors === 3
    
    if (underpopulation || overpopulation) {
      return 0
    }
    if (homeostasis || reproduction) {
      return 1
    }
    // stays dead
    return 0
  }

  sumNeighbors = (row, col) => {
    // store sum in variable
    let sum = 0
    for (let neighborRow = row - 1; neighborRow <= row + 1; neighborRow++) {
      for (let neighborCol = col - 1; neighborCol <= col + 1; neighborCol++) {
        // identify neighbors
        console.log('neighborRow is ', neighborRow)
        console.log('neighborCol is ', neighborCol)
        console.log('this.currentGen is ', this.currentGen)
        console.log('current row is ', this.currentGen[neighborRow])
        console.log('neighborValue is ', this.currentGen[neighborRow][neighborCol])
        // CODE FAILING HERE 
        const neighborValue = this.currentGen[neighborRow][neighborCol]
        // helper function to determine the bounds and isWithinBounds
        const isWithinBounds = typeof(neighborValue) === 'number'
        const isCurrentSpace = neighborRow === row && neighborCol === col
        // only store if value is not undefined AND not the current space
        if (isWithinBounds && !isCurrentSpace) {
          sum += neighborValue
        }
      }
    }
   
    
     // break into prevRow, currRow, nextRow when identifying neighbors
  }
}

const life = new GameOfLife(startingGen)
// life.sumNeighbors(1,1)
// console.log(life)
// life.determineFate(1,0)
life.determineNextGen()
