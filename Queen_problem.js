function Square(x, y) {
    this.row = x
    this.col = y
  }
  
  function Board(height, width) {
    this.solutions = []
    this.height = height
    this.width = width
    this.matrix = []
    this.safeSquares = []
    this.computations = 0
  
    this.toggleQueen = function (x,y) {
      if (this.matrix[x][y] === 'Q'){
        this.matrix[x][y] = '_'
      // console.log('remove', x, y)
      } else {
        this.matrix[x][y] = 'Q'
      // console.log('place', x, y)
      }
      // console.log(this.matrix)
  
    }
  
    this.matrixToString = function() {
      let matrixString = ''
      for (let i = 0; i < this.matrix.length; i++) {
        matrixString += '['
        for (let j = 0; j < this.matrix.length; j++) {
          matrixString += this.matrix[i][j]
          if (j < this.matrix.length - 1) {
            matrixString += '|'
          }
        }
        matrixString += ']\n'
      }
      return matrixString
    }
    
    // Populates board with empty spaces '_' and creates an array safe squares
    for (i = 0; i < height; i++) {
      this.matrix.push([])
      for (j = 0; j < width; j++) {
        this.matrix[i][j] = '_'
        this.safeSquares.push(new Square(i, j))
      }
    }
  
    function isRowSafe(square, newQueenRow) {
        return square.row !== newQueenRow
    }
  
    function isColSafe(square, newQueenCol) {
      return square.col !== newQueenCol
    }
  
    function isDiagSafe(square, newQueenRow, newQueenCol) {
      return Math.abs(square.row - newQueenRow) !== Math.abs(square.col - newQueenCol)
    }
  
    function isSquareSafe(square, newQueenRow, newQueenCol) {
      return (
        isRowSafe(square, newQueenRow) &&
        isColSafe(square, newQueenCol) &&
        isDiagSafe(square, newQueenRow, newQueenCol)
      )
    }
  
    function updateSafeSquares(queenSquare, safeSquares) {
      let remainingSafeSquares = []
      safeSquares.forEach(square =>{
        if (isSquareSafe(square, queenSquare.row, queenSquare.col)) {
          remainingSafeSquares.push(square)
        }
      })
      return remainingSafeSquares
    }
  
  
    function makeQueenSquares(safeSquares, currentRow) {
      let queenSquares = []
      safeSquares.forEach(square =>{
        if (square.row === currentRow) {
          queenSquares.push(square)
        }
      })
      return queenSquares
    } 
  
    this.findSolutions = function(numberOfQueens, safeSquares, currentRow) {
      this.computations++
      if (numberOfQueens === 0) {
        // const queenSquare = safeSquares[0]
        // console.log(this.matrixToString())
        this.solutions.push(1)
        // this.solutions.push(this.matrixToString())
        return
      }
      if (numberOfQueens > safeSquares.length) {
        return
      }
      const queenSquareList = makeQueenSquares(safeSquares, currentRow)
      // queenSquare needs to keeps queenSquare.row as 0, but increase queenSquare.col by 1 each iteration
      for (const queenSquare of queenSquareList) {
        this.toggleQueen(queenSquare.row, queenSquare.col)
        const remainingQueens = numberOfQueens - 1
        const remainingSafeSquares = updateSafeSquares(queenSquare, safeSquares)
        this.findSolutions(remainingQueens, remainingSafeSquares, currentRow + 1)
        this.toggleQueen(queenSquare.row, queenSquare.col)
      }
          
      // this.toggleQueen(x,y) 
    //place a queen (1)
    //place another queen in next safe square (2)
    //run through until either:
      //no queens left
        //store solution 
      // OR no safe squares left
    //iterate through using a new (2) square
    
    }
  }
  
  
  function solveNQueens(numberOfQueens) {
    console.log('\n\n\n\n\n\n\n\n\n\nRunning\n====================')
    if (numberOfQueens <= 0) return "Need 1 or more queens"
    const startTime = new Date().getTime()
    const board = new Board(numberOfQueens, numberOfQueens)
    board.findSolutions(numberOfQueens, board.safeSquares, 0)
    const elapsedTime = new Date().getTime() - startTime
    console.log("Number of solutions: ", board.solutions.length)
    console.log("Duration: ", elapsedTime, "ms")
    console.log("Computations: ", board.computations)
  }
  
  solveNQueens(8)
  
  
  // console.log(board)
  
  // input: board size
  // output: solutions, number of computations (each time we place a queen)
  
  /*
    matrix: [
      [ 'Q', '_', '_', '_', '_' ],
      [ '_', '_', 'Q', '_', '_' ],
      [ '_', '_', '_', '_', 'Q' ],
      [ '_', 'Q', '_', '_', '_' ],
      [ '_', '_', '_', 'Q', '_' ]
    ],
  */

 