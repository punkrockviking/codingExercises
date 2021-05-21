//TIC TAC TOE
// input coordinate (controlled via method)
// output 'X' or 'O' into tic tac toe board (controlled via method)
// constraints: keep track of turns, allow for reset of board, notifications for win and cat's game, only one character per space

class TicTacToe {
    constructor() {
      this.board = [
        ['','',''],
        ['','',''],
        ['','','']
      ]
      this.isXturn = true
      this.numTurns = 0
    }
  
    takeTurn(row, col) {
      this.placeToken(row, col)
      if (this.hasWinner() || this.isCatsGame()) {
        this.resetBoard()
      }
    }
  
    // method to place a mark
    placeToken(row, col) {
      
      // if space has token, error message
      if (this.board[row][col]) {
        console.log('error: space already has a token!')
        return
      }
      // replace empty space with token
      this.board[row][col] = this.isXturn ? 'X' : 'O'
      console.log(this.board)
      // flip flag
      this.isXturn = !this.isXturn
      this.numTurns ++
  
    }
  
    hasWinner() {
      // only check to see if hasWinner if this.numTurns >= 5
      if (this.numTurns < 5) {
        return false
      }
      // 3 tokens in a row (vert, horiz, or diag) wins game
      // whole row or col has same token
      for (let i = 0; i < this.board.length; i++) {
        const isRowWinner = this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]
        const isColWinner = this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]
        if (isRowWinner) {
          // winner winner chicken hasWinner
          this.declareWinner(this.board[i][0])
          return true
        } 
        if (isColWinner) {
          this.declareWinner(this.board[0][i])
          return true
        }
      }
      // whole diag
      const isLeftDiagWinner = this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]
      const isRightDiagWinner = this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]
      if (isLeftDiagWinner || isRightDiagWinner) {
        this.declareWinner(this.board[1][1])
        return true
      } 
      return false
    }
  
    declareWinner(winner) {
      console.log(`${winner} is the winner!`)
    }
  
    isCatsGame() {
      if (this.numTurns === 9) {
        console.log("Cat's game! Try again!")
        return true
      }
      return false
    }
  
    resetBoard() {
      this.board = [
        ['','',''],
        ['','',''],
        ['','','']
      ]
      this.isXturn = true
      this.numTurns = 0
    }
  }
  
  const firstGame = new TicTacToe()
  firstGame.takeTurn(0,2)
  firstGame.takeTurn(2,1)
  firstGame.takeTurn(1,1)
  firstGame.takeTurn(1,2)
  firstGame.takeTurn(2,0)
  firstGame.takeTurn(0,2)
  firstGame.takeTurn(2,1)
  firstGame.takeTurn(1,1)
  firstGame.takeTurn(1,2)
  firstGame.takeTurn(2,0)
  
  
  