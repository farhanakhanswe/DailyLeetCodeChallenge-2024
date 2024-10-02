/* https://neetcode.io/problems/duplicate-integer */

/* Needs improvement */

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        let firstIndex = 0;
        let lastIndex = nums.length - 1;

        while(lastIndex > firstIndex)
        {
            if(nums[lastIndex] === nums[firstIndex])
            {
                return true;
            }
            
            lastIndex--;

            if(lastIndex === firstIndex)
            {
                firstIndex++;
                lastIndex = nums.length - 1;
            }
        }

        return false;
    }
}
