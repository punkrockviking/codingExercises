/*

0 -> 1 -> 2 -> 3

*/

// input - linked list
// output - linked list in reverse
//constraints constant space (as linked list grows your # of variables should stay same), linear time (as linked list grows your time grows proportionally)

// create linked list
// node classes

class Node {
  constructor(value) {
    this.value = value
    this.next = null 
  }
}

function createList(arr) {
  //creates linked list out of values of the array
  // loop through each
  let currentNode
  let prevNode
  let headNode
  for (i = 0; i < arr.length; i++) {
    // create node
    currentNode = new Node(arr[i])
    console.log("----------------------------------------")
    console.log("Current Node: ", currentNode)
    // assign value to value and next to index +1
    if (i > 0){
      prevNode.next = currentNode
      console.log("Previous Node: ", prevNode)
    } else {
      headNode = currentNode
      console.log('headNode = ', headNode)
    }
    prevNode = currentNode
    // console.log("Value: ",arr[i-1].value)
    // console.log("Next: ",arr[i-1].next)
  }
  // create list with all nodes
  return headNode
}
function reverseList() {

}

// const nodeTest1 = new Node('apple')
// console.log(nodeTest1)



inputArray = ['a', 'b', 'c', 'd', 'e', 'f']


const linkedList = createList(inputArray)
console.log('complete list', linkedList)

// function LRUItem(key, value) {
//   this.key = key
//   this.value = value
//   this.next = null
//   this.prev = null

  // class LRUCache {
//   constructor(limit) {
//     this.limit = limit
//   }
//   get() {
//     console.log('hi')
//   }
// }