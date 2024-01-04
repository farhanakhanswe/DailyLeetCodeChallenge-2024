/* Question Link: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/ */

var minOperations = function(nums) {
    let numsMap  = new Map();

    for(let i = 0 ; i < nums.length ; i++)
    {
        if(!numsMap.has(nums[i]) )
        {
            numsMap.set(nums[i], 1)
        }else
        {
            numsMap.set(nums[i], numsMap.get(nums[i]) + 1)
        }
    }

    let minNumberOfOperations = 0;

    for (let [key, value] of numsMap.entries()) {
        if (value === 1) {
            return -1;
        }

        minNumberOfOperations += Math.ceil(value / 3);
    }

    return minNumberOfOperations;
};
