/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let subarrayMap = new Map();
    
    console.log("left: ", l);
    console.log("right: ", r);
    
    for(let i = 0; i < l.length; i++){
        subarrayMap.set(i, nums.slice(l[i], r[i] + 1));
    }
    
    console.log(subarrayMap);
    let answerArr = [];
    
    for(let [key, value] of subarrayMap){
        const descendingOrder = value.sort((a,b) => b-a);
        const commonDiff = descendingOrder[0] - descendingOrder[1];
        // console.log("sorted array: ", descendingOrder);
        // console.log("commonDiff: ", commonDiff);
        let isArithmetic = true;
        for(let i = 0; i < descendingOrder.length; i++){
            console.log("currentDiff: ", descendingOrder[i] - descendingOrder[i + 1])
            if(isNaN(descendingOrder[i] - descendingOrder[i + 1])){
                console.log("made it in the NaN trigger")
                break;
            }
            
            if(descendingOrder[i] - descendingOrder[i + 1] !== commonDiff){
                console.log("made it in the false trigger")
                isArithmetic = false;
                break;
            }
        }
        
        answerArr.push(isArithmetic);
        isArithmetic = true;
    }
        
    return answerArr;
};