/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let sortedNums1 = nums1.sort((a,b) => a-b);
    let sortedNums2 = nums2.sort((a,b) => a-b);
    
    console.log(sortedNums1);
    console.log(sortedNums2);
    
    
        return sortedNums2[0] - sortedNums1[0];
   

};