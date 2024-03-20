/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let rightNumGreaterThanMap = new Map();
    
    for(let i = 0; i < nums1.length; i++){
        if(!rightNumGreaterThanMap.has(nums1[i])){
            rightNumGreaterThanMap.set(nums1[i], -1);
        }
    }
    
    for(let i = 0; i < nums2.length; i++){
        if(rightNumGreaterThanMap.has(nums2[i])){
            for(let j  = i; j < nums2.length; j++){
                if(nums2[i] < nums2[j]){
                    rightNumGreaterThanMap.set(nums2[i], nums2[j]);
                    break;
                }
            }
        }
    }
        
    let answerArr = []
    
    for(let [key, value] of rightNumGreaterThanMap){
        answerArr.push(value);
    }
    
    return answerArr;
};