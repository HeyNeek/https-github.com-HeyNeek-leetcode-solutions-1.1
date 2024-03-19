/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
    null -> 
    prev = null
    current = head
    
    while(current)
        temp = current.next
        current.next = prev
        prev = current
        current = temp
*/
var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    
    return prev;
};