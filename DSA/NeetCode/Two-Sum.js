/* https://neetcode.io/problems/two-integer-sum */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(let i = 0 ; i < nums.length - 1 ; i++){
            let firstNum = nums[i];

            for(let j = i + 1 ; j < nums. length; j++)
            {
                let secondNum = nums[j];

                if(firstNum + secondNum === target){
                return [i, j];
            }
            }
        }

        return - 1;
    }
}
