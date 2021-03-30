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
    constructor(){}
  
    determineNextGen = () => {
      // use sumNeighbors for each space
      // transform all spaces
      // return nextGen matrix (new)
    }
  
    sumNeighbors = (space) => {
      // identify neighbors
      // store sum in variable
      const sum = null
      // break into prevRow, currRow, nextRow when identifying neighbors
    }
  }


// extension NODE js repl for the live run code


2+2 

