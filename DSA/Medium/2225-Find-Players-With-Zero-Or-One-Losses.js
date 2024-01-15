/* Question Link: https://leetcode.com/problems/find-players-with-zero-or-one-losses/ */

var findWinners = function(matches) {

    let winnerWithCountOFLossMap = new Map();

    for (let i = 0; i < matches.length; i++) {
        let winner = matches[i][0];
        let loser = matches[i][1];

        if (!winnerWithCountOFLossMap.has(winner)) {
            winnerWithCountOFLossMap.set(winner, 0);
        }

        if (!winnerWithCountOFLossMap.has(loser)) {
            winnerWithCountOFLossMap.set(loser, 0);
        }
    }

    for (let i = 0; i < matches.length; i++) {
        let loser = matches[i][1];

        if (winnerWithCountOFLossMap.has(loser)) {
            winnerWithCountOFLossMap.set(
            loser,
            winnerWithCountOFLossMap.get(loser) + 1
            );
        }
    }

    let playersWithNoLosses = [];
    let playersWithOnlyOneLoss = [];

    for (let [key, value] of winnerWithCountOFLossMap) {
        if (value === 0) {
            playersWithNoLosses.push(key);
        } else if (value === 1) {
            playersWithOnlyOneLoss.push(key);
        }
    }

    playersWithNoLosses.sort((a, b) => a - b);
    playersWithOnlyOneLoss.sort((a, b) => a - b);

    return [playersWithNoLosses, playersWithOnlyOneLoss];
};
