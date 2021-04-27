/*
Design a Leaderboard class, which has 4 functions:

The leaderboard can only hold 10 players

addScore(playerId, score): Update the leaderboard replacing the given player's score if it's higher. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
topScores(K): Return the score sum of the top K players.
topPlayers(K): Return top K players in a sorted array.
reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is not guaranteed that the player was added to the leaderboard before calling this function.
Initially, the leaderboard is empty. 
*/

// addScore() add player and score, re-order the leaderboard

//topScores(k) 

class Leaderboard {

    constructor() {
      this.allScores = {}
      this.top10 = [{playerId: "jan", score: 5}, {playerId: "feb", score: 4}, {playerId: "mar", score: 3}, {playerId: "apr", score: 1}]
    }
  
    addScore = (playerId, score) => {
      // add a key value pair to allScores object
      // if playerId does not exist or if score is > previous score
      if (!(playerId in this.allScores) || score > this.allScores[playerId]) {
        this.allScores[playerId] = score
      }
      console.log('all scores are:', this.allScores)
      // console.log(this.allScores[playerId])
      // console.log(this.allScores.janstorm)
    }
  
    addTop10 = () => {
    // add to this.top10 from this.allscores
    }
  
    sortTop10 = () => {
      // sort in decending order
      // limit to 10 entries
    }
  
    topScores = (numPlayers) => {
      // input a number of players
      let sum = 0
      for(let i = 0; i < numPlayers; i++) {
        const currentPlayer = this.top10[i]
        sum += currentPlayer.score
      }
      // output sum of those players scores
      return sum
    }
  
    topPlayers = (numPlayers) => {
      // input a number of players
      // let players = []
      // for(let i = 0; i < numPlayers; i++) {
      //   players[i] = this.top10[i]
      // }
      // // output this.top10 up to a certain index [numplayers -1]
      // return players
  
      return this.top10.slice(0, numPlayers)
    }
  
    reset = (playerId) => {
      if (playerId in this.allScores) {
        this.allScores[playerId] = 0
      }
  
    }
  
    
  
  }
  
  const leaderboard = new Leaderboard()
  leaderboard.addScore('janstorm', 5000)
  leaderboard.addScore('janstorm', 600)
  leaderboard.topScores(3)
  leaderboard.topPlayers(4)
  
  
  // const arr = [{score: 333},{score: 444},{score: 111},{score: 555},{score: 222}]
  
  // arr.sort((a, b) => b.score - a.score)