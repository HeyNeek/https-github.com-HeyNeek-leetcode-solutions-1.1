/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let answerArr = [];
    
    for(let i = 0; i < nums.length; i++){
        let splitNum = String(nums[i]).split("");
        
        for(let j = 0; j < splitNum.length; j++){
            answerArr.push(Number(splitNum[j]));
        }
    }
    
    return answerArr;
};