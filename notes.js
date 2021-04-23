

  
// function Node(value, left=null, right=null) {
//     this.value = value
//     this.left = left
//     this.right = right
//   }
  
//   // left, right, value (input)
  
  
   
//    const nodeH = new Node("H")
//    const nodeI = new Node("I")
//    const nodeD = new Node("D", nodeH)
//    const nodeE = new Node("E")
//    const nodeF = new Node("F",null, nodeI)
//    const nodeG = new Node("G")
//    const nodeB = new Node("B", nodeD, nodeE)
//    const nodeC = new Node("C", nodeF, nodeG)
//    const nodeA = new Node("A", nodeB, nodeC)
  
  
   
//   // depth first approach
//    // look at the left child
//    // look at the left childs child
//    // input = rootNode, targetValue
//    // output = boolean, whether or not the node has the target value
//    // constraints= depth first (left children first), every node will have a value
//   function depthFirstSearch(node, targetValue) {
    
//     let targetFound = false 
  
//     if (node.value === targetValue) {
//       return true 
//     } 
//     if (node.left) {
//       targetFound = depthFirstSearch(node.left, targetValue)
//     }
//     if (targetFound) {
//       return targetFound
//     }
//     if (node.right) {
//       targetFound = depthFirstSearch(node.right, targetValue)
//     }
//     return targetFound
//   }
//    depthFirstSearch(nodeA, "I")
   
//    // breadth first approach
//    // look at the left child
//    // look at the right child
//   function breadthFirstSearch(rootNode, targetValue) {
//     const queue = [rootNode]
//     while (queue.length) {
//       // let printQueue = queue.map((node) => node.value)
//       // console.log(printQueue)
//       let currentNode = queue.shift()
//       if (currentNode.value === targetValue) {
//         return true
//       }
//       if (currentNode.left) {
//         queue.push(currentNode.left)
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right)
//       }
//     }
//     return false
  
//   }
  
//    breadthFirstSearch(nodeA, "E")
//    /*
  
//             A    
//           /   \
//         B      C   
//        / \    / \
//      D    E  F   G     
//     /         \
//   H            I  
//        */
      
//   //preorder traversal, inorder traversal, postordertraversal
  
  
// // binary search
// const list = [0, 2, 4, 5, 7, 9, 10, 12, 15, 19, 20, 22, 23, 25, 28, 30, 31]


// function findElement(targetNumber, arr) {
//   for (i=0; i > arr.length; i++) {
//     if (arr[i] === targetNumber) {
//       return i
//     }
//   }
// }
// // findElement(19, list)
// // Write a function using binary search to find a target value in an array

// //find 1/2 of the array.length
// //compare that value with target targetNumber
// // take note of positions that will be used going forward
// // repeat until targetNumber is found
// let level = 0

// function binarySearch(targetNumber, arr, start=null, end=null) {
//   const startIndex = start || 0
//   const endIndex = end || arr.length
//   const middleIndex = Math.floor((startIndex + endIndex)/2) 
//   console.log("============================== ")
//   console.log("level", level)
//   console.log("startIndex", startIndex)
//   console.log("endIndex", endIndex)
//   console.log("middleIndex", middleIndex)
// console.log("arr[middleIndex] === targetNumber", arr[middleIndex] === targetNumber)
//   level++

//   if (arr[middleIndex] === targetNumber) {
//     return middleIndex 
//   }
  
//   if (arr[middleIndex] > targetNumber) {
//     return binarySearch(targetNumber, arr, startIndex, middleIndex)
//   }

//   if (arr[middleIndex] < targetNumber) {
//     return binarySearch(targetNumber, arr, middleIndex, endIndex)
//   }
// }

// binarySearch(31,list)


// log2(1048576) = 20
// log2(16) = 5


// 2^10 = 1024


// [3,7,3,1] >> [3,3,7,1] >> [3,3,1,7]
// [3,3,1,7] >> [3,1,3,7]
// [1,3,3,7]

// function swapNumbers(i,j,arr) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
//   return arr
// }

// function bubbleSort(arr) {
//   let needsSorting = true
//   let outerLoop = 0
//   // Continue iterating while array isn't sorted
//   while (needsSorting) {
//     needsSorting = false
//     console.log(`outerLoop ${outerLoop}`, arr)
//     // Go through the array
//     for(i=0; i < arr.length; i++) {
//       console.log(`> Round ${i}`)
//       // Check if positions need to be swapped
//       if (arr[i] > arr[i+1]) {
//         needsSorting = true
//         swapNumbers(i,i+1,arr)
//       }
//     }
//     outerLoop++
//   }
//   return arr
// }

// const test = [3,7,3,1,8]
// bubbleSort(test)




//notes notes notes




