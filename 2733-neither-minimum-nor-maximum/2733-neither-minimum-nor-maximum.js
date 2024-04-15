/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let sortedArr = nums.sort((a,b) => a-b);
    
    let min = sortedArr[0];
    let max = sortedArr[sortedArr.length - 1];
    
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] !== min && sortedArr[i] !== max){
            return sortedArr[i];
        }
    }
    
    return -1;
};