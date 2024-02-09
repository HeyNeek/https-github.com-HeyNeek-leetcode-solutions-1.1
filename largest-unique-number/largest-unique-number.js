/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    //create numMap to store the numbers in the nums array as keys and the frequencies as ints
    const numMap = new Map();
    
    //create variable to track the current highest number in the array that fits our AC
    let highestNum = 0;
    
    /*
    iterate through the array and assign the number to a key if it exists and set it to 1,
    if it does already exist from a previous iteration we just increment it's key-value by 1
    */
    for(let i = 0; i < nums.length; i++){
        if(!numMap.has(nums[i])){
            numMap.set(nums[i], 1);
        }else{
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        }
    }
    
    /*
    we iterate through the numMap and as long as the key's value doesn't exceed 1
    and the key's value itself is greater than the current highestNum value, we will replace
    the highestNum's current value with that of the key itself.
    continue this process until we figure out which key in numMaps is greatest and doesnt repeat itself.
    */
    for (const [key, value] of numMap) {
        if (key > highestNum && value === 1) {
            highestNum = key;
        }
    }
    
    //if none of the keys in numMap satisfy our requirements we return -1
    if(highestNum === 0){
        return -1;
    }
    
    //if we do have a valid highestNum we just return highestNum
    return highestNum;
};