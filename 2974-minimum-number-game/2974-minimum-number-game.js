/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let answerArr = [];
    const sortedNumsArr = nums.sort((a,b) => a-b);
        
    while(sortedNumsArr.length > 0){
        answerArr.push(sortedNumsArr[1]);
        answerArr.push(sortedNumsArr[0]);
        
        sortedNumsArr.shift();
        sortedNumsArr.shift();
    }
    
    return answerArr;
    
};