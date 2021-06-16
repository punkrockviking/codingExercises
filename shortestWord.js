/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    let shortestWord = 100
    let tally = 0
    for (let i = 0; i < s.length; i++) {
      console.log('-----------------------------')
      console.log('the letter is ', s[i])
      console.log('shortestWord is ', shortestWord)
      console.log('tally is ', tally)
      if (i === s.length - 1){
        tally += 1
        if(tally < shortestWord) {
          shortestWord = tally
          tally = 0
        }
        return shortestWord
      }
      if (s[i] === ' ') {
        if(tally < shortestWord) {
          shortestWord = tally
        }
        tally = 0
      }  
      else {
        tally = tally + 1
        console.log('adding to the tally')
      }
    }
    return shortestWord
  }



  describe("Example tests",() =>{
    Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    Test.assertEquals(findShort("Let's travel abroad shall we"), 2);
    });