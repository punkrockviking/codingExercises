// {} [] ()
// Write an algorithm that determines whether a string has balanced brackets
// { (  [])()}
// ({)}

// input - string
// output - boolean
// constraints - brackets must be balanced, brackets must be closed in order of most recently opened, inner brackets must be closed before outer brackets
// at most linear space, linear time

// console.debugging = false
function isBracketBalanced(bracketStr) {
    const bracketStack = []
    const bracketPairs = {
      '{': '}',
      '[': ']',
      '(': ')',
    }
    // console.debug(bracketPairs)
    const closeBrackets = ['}',']',')']
    
    const closedBracketSet = new Set(closeBrackets)
    // console.debug(closedBracketSet)
    for(i = 0; i < bracketStr.length; i++) {
      // if you come across a bracket in the string, push it onto the bracketStack
      const character = bracketStr[i]
      // console.debug("character", character)
      if (closedBracketSet.has(character)) {
        // check if it matches syntax
          // if character is in closedBracketSet, does it match with top of stack
        const topOfStack = bracketStack.pop()
        // console.debug("topOfStack", topOfStack)
        if (bracketPairs[topOfStack] !== character) {
          return false
        }
      } else if (character in bracketPairs) {
        bracketStack.push(character)
        // console.debug("bracketStack", bracketStack)
      }
    }
    // console.debug('Congrats, your string is balanced!')
    return bracketStack.length === 0
  }
  
  isBracketBalanced('ab{c}d')
  
  
  
  const validBracket = '{}'
  const validNestedBracket = '{()}'
  const invalidClosedBracket = '}{'
  const invalidNestedBracket = '{(})'
  const invalidUnclosedBracket = '{()'
  const longValidBracket = '[a][b]c{}d{}()()({{{arstarst}}()[]})[]'
  
  console.log("validBracket... Pass?", isBracketBalanced(validBracket) === true)
  console.log("validNestedBracket... Pass?", isBracketBalanced(validNestedBracket) === true)
  console.log("invalidClosedBracket... Pass?", isBracketBalanced(invalidClosedBracket) === false)
  console.log("invalidNestedBracket... Pass?", isBracketBalanced(invalidNestedBracket) === false)
  console.log("invalidUnclosedBracket... Pass?", isBracketBalanced(invalidUnclosedBracket) === false)
  console.log("longValidBracket... Pass?", isBracketBalanced(longValidBracket) === true)
  
  
  
  
  