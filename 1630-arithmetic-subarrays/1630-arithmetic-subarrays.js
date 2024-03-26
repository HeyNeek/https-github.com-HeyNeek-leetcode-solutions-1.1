/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let subarrayMap = new Map();
    
    for(let i = 0; i < l.length; i++){
        subarrayMap.set(i, nums.slice(l[i], r[i] + 1));
    }
    
    let answerArr = [];
    
    for(let [key, value] of subarrayMap){
        const descendingOrder = value.sort((a,b) => b-a);
        const commonDiff = descendingOrder[0] - descendingOrder[1];
        let isArithmetic = true;
        for(let i = 0; i < descendingOrder.length; i++){
            if(isNaN(descendingOrder[i] - descendingOrder[i + 1])){
                break;
            }
            
            if(descendingOrder[i] - descendingOrder[i + 1] !== commonDiff){
                isArithmetic = false;
                break;
            }
        }
        
        answerArr.push(isArithmetic);
        isArithmetic = true;
    }
        
    return answerArr;
};