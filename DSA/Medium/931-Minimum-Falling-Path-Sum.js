/* Question Link: https://leetcode.com/problems/minimum-falling-path-sum/ */

var minFallingPathSum = function(matrix) {
    if(!matrix || matrix.length === 0 || matrix[0].length === 0){
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    for(let row = 1; row < rows; row++)
    {
        for(let col = 0; col < cols; col++){
            matrix[row][col] += Math.min(
                matrix[row - 1][Math.max(0, col - 1)],
                matrix[row - 1][col],
                matrix[row - 1][Math.min(cols - 1, col + 1)]
            );
        }
    }

    return Math.min(...matrix[rows - 1]);
};
