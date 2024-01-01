/* Question Link: https://leetcode.com/problems/assign-cookies/ */

/* Brute Force Solution */

var findContentChildren = function(g, s) {
    
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);

    let maxCount = 0;

    for (let i = 0; i < g.length; i++) {
        let currGreedFactor = g[i];

        for (let j = 0; j < s.length; j++) {
            let currCookieSize = s[j];

            if (currCookieSize >= currGreedFactor) {
                maxCount++;
                s.splice(j, 1);
                break;
            }
        }
    }

    return maxCount;
};
