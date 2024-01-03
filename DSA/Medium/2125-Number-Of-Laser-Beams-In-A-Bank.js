/* Question Link: https://leetcode.com/problems/number-of-laser-beams-in-a-bank/ */

var numberOfBeams = function(bank) {

    let devices = [];
    let totalBeams = 0;

    for(let i = 0 ; i < bank.length ; i++)
    {
        let numOfLasersInEachRow = bank[i].split('').filter(num => num === '1').length;

        if(numOfLasersInEachRow !== 0)
        {
            devices.push(numOfLasersInEachRow);
        }
    }

    for(let i = 0 ; i < devices.length - 1 ; i++)
    {
        let numOfLasersInCurrentRow = devices[i];
        let numOfLasersInNextRow = devices[i+1];

        totalBeams += numOfLasersInCurrentRow * numOfLasersInNextRow;
    }

    return totalBeams;
};
