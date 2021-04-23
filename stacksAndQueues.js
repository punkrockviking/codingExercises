/*******************************************************************
 * 
 */



function Stack(color) {
    const collection = []
    let index = 0
    
    this.push = function (input) {
      collection[index] = input
      index++
    }
    
    this.size = function() {
      return index
    }
    
    this.pop = function () {
      if (index > 0) {
        index--
        const lastElement = collection[index] 
  
        delete collection[index]
        
        return lastElement
      }
    }
    // this.pop
    // this.size
    this.color = color
  }
  
  //enqueue
  //dequeue
  //size
  function Queue() {
    const inbox = new Stack()
    const outbox = new Stack()
  
    this.size = function() {
      console.log(inbox.size() + outbox.size())
      return inbox.size() + outbox.size()
    }
    this.enqueue = function(input) {
      console.log("== enqueuing ==")
      while (outbox.size() > 0) {
        const elementInTransitionBackwards = outbox.pop()
        inbox.push(elementInTransitionBackwards) 
        console.log("Moving back to inbox", elementInTransitionBackwards)
      }
      inbox.push(input)  
      console.log(input)
      console.log("============")
    }
    this.dequeue = function() {
      console.log("== dequeuing ==")
      if (!this.size) {
        return
      }
      while (inbox.size() > 0) {
        const elementInTransition = inbox.pop()
        outbox.push(elementInTransition)
        console.log("Moving to outbox", elementInTransition)
      }
      var el = outbox.pop()
      console.log(el)
      console.log("============")
      return el
    }
  }
  
  
  
  testQueue = new Queue()
  
  testQueue.enqueue("apple")
  testQueue.enqueue("banana")
  testQueue.enqueue("strappleberry")
  testQueue.enqueue("mango")
  
  testQueue.dequeue()
  testQueue.enqueue("potato")
  testQueue.dequeue()
  testQueue.dequeue()// left, right, and