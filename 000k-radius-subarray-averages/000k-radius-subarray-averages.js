/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {

    let output = [];
    let sum = 0;
    let d = k * 2 + 1;

    for ( let i = 0; i < d; i++ ) {
    sum += nums[i]
  }
  for ( let i = 0; i < nums.length; i++ ) {
    if ( i < k || i > nums.length - k - 1 ) {
      output.push(-1)
      continue
    }
    if ( i > k ) {
      sum += nums[i + k] - nums[i - k - 1]
    }
    output.push(Math.floor(sum / d))
  }
  return output
    
};