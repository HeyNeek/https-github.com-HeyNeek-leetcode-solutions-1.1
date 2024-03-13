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
var middleNode = function(head) {
    let current = head;
    let length = 0;
    
    while(current){
        current = current.next;
        length++;
    }
        
    current = head;
    
    for(let i = 0; i < Math.floor(length / 2); i++){
        current = current.next;
    }
    
    return current;
};