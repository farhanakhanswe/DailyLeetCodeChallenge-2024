/* Question Link: https://leetcode.com/problems/maximum-profit-in-job-scheduling/ */

var jobScheduling = function(startTime, endTime, profit) {
    
    let jobs = [];

    for(let i = 0; i < startTime.length; i++)
    {
        jobs.push({start: startTime[i], end: endTime[i], profit: profit[i]});
    }

    jobs.sort((a,b ) => a.end - b.end);

    const dp = [[0,0]];

    for(const { start, end, profit} of jobs){
        let prevIdx = binarySearch(dp, start + 1) - 1;
        let prevProfit = dp[prevIdx][1];

        let maxProfit = Math.max(dp[dp.length - 1][1], prevProfit + profit);
        dp.push([end, maxProfit]);
    }
    
    return dp[dp.length - 1][1];
};

var binarySearch = function(dp, target) {
    let left = 0, right = dp.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (dp[mid][0] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
