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

class LinkedList {
  constructor(headNode, tailNode) {
    this.head = headNode
    this.tail = tailNode
  }
  addHead() {
  }

  removeHead() {
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

function reverseList(linkedListHead) {
  let currentNode = linkedListHead
  let prevNode = null
  while (currentNode) {
    console.log('=============================================================')
    console.log('prevNode = ', prevNode)
    console.log('currentNode = ', currentNode)
    const nextNode = currentNode.next
    console.log('nextNode = ', nextNode)
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = nextNode
    // [currentNode.next, prevNode, currentNode] = [prevNode, currentNode, currentNode.next]
  /* 
    given currentNode = linkedListHead
    given prevNode = null
    store nextNode (currentNode next prop)
    set currentNode.next = prevNode
    set currentNode = nextNode
  */  
  }
  return prevNode
  // make the .next of the nodeF point to the last node in the loop
}

// const nodeTest1 = new Node('apple')
// console.log(nodeTest1)


function checkLinkedList(head) {
  let currentNode = head
  let nextNode, tempNode 
  while (currentNode) {
    console.log("current node value: ", currentNode.value)
    currentNode = currentNode.next
  }
}


inputArray = ['a', 'b', 'c', 'd', 'e', 'f']


const linkedList = createList(inputArray)
console.log('complete list', linkedList)

console.log("In order\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
checkLinkedList(linkedList)
const reversedLinkList = reverseList(linkedList)
console.log("\n Reversed Linked List:", reversedLinkList)
console.log("Reverse order\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
checkLinkedList(reversedLinkList)

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