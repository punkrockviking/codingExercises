
// [
//   [g, d, a],
//   [h, e, b],
//   [i, f, c]
// ]

//input: matrix (array of arrays), clockwise or counterclockwise
//output: the matrix rotated counter clockwise or clockwise
//constraints: must be able to choose clockwise or counter, matrix can be variable length and arrays inside can also be of variable length

// shift removes from beginning
// unshift adds to beginning
// push adds to end
// pop removes to end

// CLOCKWISE
  // first row --> last col
  // middle row --> middle col
  // last row --> first col
  
// a column could be defined as each row at postition col 
  // column 3
  // [
  // row 0[2], c
  // row 1[2], f
  // row 2[2]  i
  // ]
// console.log(matrix[row][col])
const inputMatrix = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l']
  ]
  
  function rotateMatrix(matrix, isClockwise) {
    const width = matrix[0].length
    const height = matrix.length
    const rotatedMatrix = []
  
    if (isClockwise !== true && isClockwise !== false) {
      console.log('You know what to do')
      return
    }
  
    for (col = 0; col < width; col++) rotatedMatrix.push([])
  
    for (currentRowIndex = 0; currentRowIndex < height; currentRowIndex++) {
        console.log('currentRowIndex', currentRowIndex)
  
      for (currentColIndex = 0; currentColIndex < width; currentColIndex++) {
        let rotatedRow, rotatedCol
        if (isClockwise) {
          rotatedRow = currentColIndex 
          rotatedCol = (height - 1) - currentRowIndex
        } else {
          rotatedRow = (width - 1) - currentColIndex
          rotatedCol = currentRowIndex
        }
        rotatedMatrix[rotatedRow][rotatedCol] = matrix[currentRowIndex][currentColIndex]
        console.log('currentColIndex', currentColIndex)
        console.log('direction', isClockwise ? 'clockwise' : 'counterclockwise')
        console.log('rotatedRow', rotatedRow)
        console.log('rotatedCol', rotatedCol)
        console.log(rotatedMatrix)
        console.log("-----------------------------")
      } 
    }
  }
  
  rotateMatrix(inputMatrix, true)
  rotateMatrix(inputMatrix, false)