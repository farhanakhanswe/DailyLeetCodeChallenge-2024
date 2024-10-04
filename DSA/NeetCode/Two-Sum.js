/* https://neetcode.io/problems/two-integer-sum */

/* Needs Improvement */
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

/* Incorrect Solution */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

     let sortedNums = nums.sort((a, b) => a - b);
     let firstIndex = 0;
     let secondIndex = sortedNums.length - 1;

     while(sortedNums[firstIndex] < sortedNums[secondIndex])
     {
        let sum = sortedNums[firstIndex] + sortedNums[secondIndex];

        if( sum === target) 
        {
            return [nums.indexOf(sortedNums[firstIndex]), nums.indexOf(sortedNums[secondIndex])];
        }
        
        if(sum > target )
        {
            secondIndex --;
        }

        if(sum < target)
        {
            firstIndex++;
        }
     }
     
      return [];
    }
}
