/* Question Link: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram */

var minSteps = function(s, t) {

   let map = new Map();
   let steps = 0;

    for (let letter of s) {
        map.set(letter, (map.get(letter) || 0) + 1);
    }

    for (let letter of t) {
        if (map.has(letter) && map.get(letter) > 0) {
            map.set(letter, map.get(letter) - 1);
        } else {
            steps++;
        }
    }

    return steps;

};
