/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let sortedArr = nums.sort((a,b) => a-b);
    // console.log(sortedArr)
    
    let min = sortedArr[0];
    let max = sortedArr[sortedArr.length - 1];
    
    // console.log(min)
    // console.log(max)
    
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] !== min && sortedArr[i] !== max){
            return sortedArr[i];
        }
    }
    
    return -1;
};