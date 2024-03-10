/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const numMap1 = new Map();
    const numMap2 = new Map();
    
    for(let i = 0; i < nums1.length; i++){
        if(!numMap1.has(nums1[i])){
            numMap1.set(nums1[i], 1);
        }else{
            numMap1.set(nums1[i], numMap1.get(nums1[i]) + 1);
        }
    }
    
     for(let i = 0; i < nums2.length; i++){
        if(!numMap2.has(nums2[i])){
            numMap2.set(nums2[i], 1);
        }else{
            numMap2.set(nums2[i], numMap2.get(nums2[i]) + 1);
        }
    }
  
    let answerArr = [0,0];
    
    for(let [key, value] of numMap1){
        // console.log(key)
        if(numMap2.has(key)){
            answerArr[0] += value;
        }
    }
    
    for(let [key, value] of numMap2){
        // console.log(key)
        if(numMap1.has(key)){
            answerArr[1] += value;
        }
    }
    
    return answerArr;
    
};