/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = 0;
    let count = 0; 
    while (count< nums.length){
        runningSum += nums[count];
        nums[count] = runningSum;
        
        count++;
    }
    return nums;
};
