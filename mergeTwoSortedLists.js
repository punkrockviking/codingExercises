/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const mergeTwoLists = function(l1, l2) {
    // const combinedList = l1.concat(l2)
    // console.log(combinedList)
    // return combinedList.sort()
    const combinedList = [...l1, ...l2]
    return combinedList.sort()
  };
  mergeTwoLists([1,2,4],[1,3,4])
  mergeTwoLists([],[0])