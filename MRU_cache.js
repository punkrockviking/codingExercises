// cache
// get (return value for key)
// set (add new item to cache)
// size (how many items in cache)
// limit (cache can only contain X items)
// items with key and value (object)
// class models cache
// class models items
// input items (key, value)
// expected behavior (create cache the size of input, fill cache with items, least recently used item kicked out once cache is full)
// constraints  (constant lookup times, constant insert times)

// class LRUCache {
//   constructor(limit) {
//     this.limit = limit
//   }
//   get() {
//     console.log('hi')
//   }
// }


function LRUCache(limit) {
  this.cache = {}
  this.limit = limit
  this.mRU = null
  this.lRU = null

  this.map = new Map()
  console.log("map", this.map)

  this.get = (key) => {
    // is item in cache
    if (!(key in this.cache)) {
      console.log("Invalid input. Item is not in the cache!")
      return
    }
    // if (this.mRU && key === this.mRU.key) {
    //   return  
    // }
    // // if the item we are putting === lRU: reassign lRU to the lRU.next
    // if (this.lRU && key === this.lRU.key) {
    //   console.log("reassigning lRU")
    //   // reassign lRU to lRU.next
    //   this.lRU = this.lRU.next
    //   this.lRU.prev = null
    // } else if (key in this.cache) {
    //   console.log("reassigning something in the middle")
    //   // reassign parentage of the next and prev items
    //   this.cache[key].prev.next = this.cache[key].next
    //   this.cache[key].next.prev = this.cache[key].prev
    // } 
    // //move that item to MRU slot
    const node = this.cache[key]
    this.remove(node)
    this.mRU = node

    //return value for a key
    return node.value
  }
  this.put = (item) => {
    console.log('\n====================================================\n')
    const { key } = item

    // if (this.mRU && key === this.mRU.key) {
    //   return  
    // }
    // // if the item we are putting === lRU: reassign lRU to the lRU.next
    // if (this.lRU && key === this.lRU.key) {
    //   console.log("reassigning lRU")
    //   // reassign lRU to lRU.next
    //   this.lRU = this.lRU.next
    //   this.lRU.prev = null
    // } else if (key in this.cache) {
    //   console.log("reassigning something in the middle")
    //   // reassign parentage of the next and prev items
    //   item.prev.next = item.next
    //   item.next.prev = item.prev
    // } 
    // // if length of cache is full
    if (key in this.cache) {
      const node = this.cache[key]
      this.remove(node)
    } else if (this.size() === limit) {
      delete this.cache[this.lRU.key]
      this.remove(this.lRU)
    }
    // else if (this.size() === limit) {
    //   // reassign LRU item
    //   this.lRU = this.lRU.next
    //   // remove the old LRU item 
    //   console.log("EJECTING '", this.lRU.prev.key, "' from the cache!")
    //   delete this.cache[this.lRU.prev.key]
    //   // remove reference to its previous  
    //   this.lRU.prev = null
      
    // }
    
    if (this.size() === 0) {
      this.lRU = item
    }
    //create and update the key and value from the new LRUItem
    this.cache[key] = item
  //put new item in mRU slot
    item.prev = this.mRU
    if (this.mRU) {  
      this.mRU.next = item
    }
    console.log('Second most recently used item = ',this.mRU)
    this.mRU = item
    console.log('Most Recently Used Item = ', this.mRU)
  }

  this.remove = (node) => {
    if (!node.next && !node.prev) { // if there's only 1 node
      this.mRU === null;
      this.lRU === null;
    } else if (!node.next) { // if the node is mRU node
      this.mRU = node.prev;
      this.mRU.next = null;
    } else if (!node.prev) { // if the node is lRU node
      this.lRU = node.next;
      this.lRU.prev = null;
    } else { // if the node is in between
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
  }


  this.size = () => {
    //how many items in our cache
    return Object.keys(this.cache).length
  }

}
//have to reassign lRU if you get that value OR if your cache fills up

function LRUItem(key, value) {
  this.key = key
  this.value = value
  this.next = null
  this.prev = null
}
const ram = new LRUCache(3)
const item1 = new LRUItem('a', 'blue')
const item2 = new LRUItem('b', 'violet')
const item3 = new LRUItem('c', 'red')
const item4 = new LRUItem('d', 'teal')

ram.put(item1)
ram.put(item2)
ram.put(item3)
ram.put(item4)
console.log(ram.size())
console.log(ram.get('c'))



// //ordered dictionary aka map
// class LRUCache {
//     constructor(limit) {
//         this.map = new Map();
//         this.limit = limit;
//     }

//     get(key) {
//         if (!this.map.has(key)) return -1;
//         const val = this.map.get(key);
//         this.map.delete(key);
//         this.map.set(key, val);
//         return val;
//     }

//     put(key, value) {
//         this.map.delete(key);
//         this.map.set(key, value);
//         if (this.map.size > this.limit) {
//           const lRU = this.map.keys().next().value;
//           this.map.delete(lRU);
//         }
//     }
// }