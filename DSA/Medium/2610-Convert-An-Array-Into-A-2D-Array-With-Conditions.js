/* Question Link: https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/ */

var findMatrix = function(nums) {

  const numsObj = {};
  const resulting2DArray = [];

  for (const num of nums) {
    numsObj[num] = (numsObj[num] || 0) + 1;
    const indexOfResulting2DArray = numsObj[num] - 1;

    // check if this index exists in the 2D array
    if (!resulting2DArray[indexOfResulting2DArray]) {
      resulting2DArray[indexOfResulting2DArray] = [];
    }

    resulting2DArray[indexOfResulting2DArray].push(num);
  }

  return resulting2DArray;
  
};
