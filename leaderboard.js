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
    // if the new score is greater than lowest score in top 10, or top 10 isnt full, call addTop10()
    if (this.top10.length <= 10 || score > this.top10[this.top10.length - 1]) {
      this.addTop10(playerId, score)
    }
    console.log('all scores are:', this.allScores)
    // console.log(this.allScores[playerId])
    // console.log(this.allScores.janstorm)
  }

  addTop10 = (playerId, score) => {
  // add to this.top10 from this.allscores
    // restructure data
    const newTopPlayer = {playerId, score}
    // let replaceScore = false
    // for (let i = 0; i < this.top10.length; i++) {
    //   // does playerId equal the playerId in this index
    //   if (playerId === this.top10[i].playerId) {
    //     this.top10[i].score = Math.max(score, this.top10[i].score)
    //     replaceScore = true
    //   }
    // }
    // // push the playerID and score onto this.top10
    // if (!replaceScore) {
    //   this.top10.push(newTopPlayer)
    // }

    const existingPlayer = this.top10.findIndex(entry => entry.playerId === playerId)

    if (existingPlayer > -1) {
      this.top10[existingPlayer].score = Math.max(score, this.top10[existingPlayer].score)
    } else {
      this.top10.push(newTopPlayer)
    }

    // call sortTop10()
    this.sortTop10()
    // limit to 10 slots
    if (this.top10.length > 10) {
      this.top10.pop()
    }
    // console.log(this.top10)
  }

  sortTop10 = () => {
    // sort in decending order
    return this.top10.sort((a, b) => b.score - a.score)
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
    const topPlayer = this.top10.findIndex(entry => entry.playerId === playerId)
    if (topPlayer > -1) {
      this.top10.splice(topPlayer,1)
      // search through this.allScores to find the highest score outside of this.top10
      const lowestTop10Score = this.top10[this.top10.length - 1].score
      let replacementScore = -1
      let replacementId = null
      for (let currentId in this.allScores) {
        const currentScore = this.allScores[currentId]
        // replacement score is < lowest top10 score but > all other scores
        if (currentScore < lowestTop10Score && currentScore > replacementScore) {
          replacementScore = currentScore
          replacementId = currentId
        }
      }
      this.addTop10(replacementId, replacementScore)
    }
    console.log(this.top10)
  }

  

}

const leaderboard = new Leaderboard()
leaderboard.addScore('janstorm', 5000)
leaderboard.addScore('janstorm', 600)
leaderboard.topScores(3)
leaderboard.topPlayers(2)
leaderboard.sortTop10()
leaderboard.addScore('willywonka',5600)
leaderboard.addScore('add',234)
leaderboard.addScore('call',43)
leaderboard.addScore('before',23)
leaderboard.addScore('replacing',555)
leaderboard.addScore('given',33)
leaderboard.addScore('butt',1111)
leaderboard.addScore('data',22)
leaderboard.addScore('for',12)
leaderboard.addScore('value',787)
leaderboard.addScore('zarst',5)
leaderboard.addScore('qul',645)
leaderboard.reset('janstorm')
// const arr = [{score: 333},{score: 444},{score: 111},{score: 555},{score: 222}]

// arr.sort((a, b) => b.score - a.score)