/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let string = nums.toString().replaceAll(',',"")
    let arr = Array.from(string,Number)
    return arr
};