/* Link: https://leetcode.com/problems/fibonacci-number */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n < 2){
        return n;
    }
    return fib(n - 1) + fib(n -2);
};
