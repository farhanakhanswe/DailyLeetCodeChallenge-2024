/* Question Link: https://leetcode.com/problems/set-mismatch/ */

var findErrorNums = function(nums) {
    
   let duplicate, missing;

   nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i - 1];
        let current = nums[i];

        if (prev === current) {
            duplicate = current;
        } else if (prev !== current - 1) {
            missing = prev + 1;
        }
    }
    
    if (nums[0] !== 1) {
        missing = 1;
    }

    if (nums[nums.length - 1] !== nums.length) {
        missing = nums.length;
    }

    return [duplicate, missing];
};
