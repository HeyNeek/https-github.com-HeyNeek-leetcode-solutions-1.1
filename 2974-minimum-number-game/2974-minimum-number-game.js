/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let answerArr = [];
    const sortedNumsArr = nums.sort((a,b) => a-b);
    
    console.log(sortedNumsArr);
    
    while(sortedNumsArr.length > 0){
      const aliceSplicedNum = sortedNumsArr.splice(0, 1);
      const bobSplicedNum = sortedNumsArr.splice(0, 1);

      answerArr.push(...bobSplicedNum);
      answerArr.push(...aliceSplicedNum);

      // console.log("nums: ", sortedNumsArr);
      // console.log("answerArr: ", answerArr);
    }
    
    return answerArr;
    
};