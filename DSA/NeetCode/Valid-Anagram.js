/* https://neetcode.io/problems/is-anagram */

/* Needs improvement */

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');

        if(sortedS === sortedT) return true;
        
        return false;
    }
}
