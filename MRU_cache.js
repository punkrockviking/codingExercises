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
  
    this.get = (key) => {
      //return value for a key
      //move that item to MRU slot
      return this.cache[key].value
    }
    this.put = (item) => {
      console.log('\n====================================================\n')
      const { key, value } = item
  
      if (this.size() === 0) {
        this.lRU = item
      }
      //create and update the key and value from the new LRUItem
      
      this.cache[key] = item
      // if length of cache is full
        if (this.size() === limit) {
        // remove the LRU item 
  
  
        }
    //put new item in mRU slot
      item.prev = this.mRU
      if (this.mRU) {  
        this.mRU.next = item
      }
      console.log('Previous item = ',this.mRU)
      this.mRU = item
      console.log('Most Recently Used Item = ', this.mRU)
  
      
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
  const ram = new LRUCache(4)
  const item1 = new LRUItem('a', 'blue')
  const item2 = new LRUItem('b', 'violet')
  const item3 = new LRUItem('c', 'red')
  ram.put(item1)
  ram.put(item2)
  ram.put(item3)
  console.log(ram.size())
  console.log(ram.get('a'))