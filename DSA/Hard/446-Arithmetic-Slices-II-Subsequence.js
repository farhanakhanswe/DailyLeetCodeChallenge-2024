/* Question Link: https://leetcode.com/problems/arithmetic-slices-ii-subsequence/ */

var numberOfArithmeticSlices = function(nums) {
    
    let totalNumOfArithmeticSubsequence = 0;
    let dp = [];

    for(let i = 0 ; i < nums.length ; i++)
    {
        dp[i] = new Map();

        for(let j = 0; j < i; j++)
        {
            let diff = nums[i] - nums[j];
            let countJ = dp[j].get(diff) || 0;

            dp[i].set(diff, (dp[i].get(diff) || 0) + countJ + 1);

            totalNumOfArithmeticSubsequence += countJ;
        }
    }

    return totalNumOfArithmeticSubsequence;
};
