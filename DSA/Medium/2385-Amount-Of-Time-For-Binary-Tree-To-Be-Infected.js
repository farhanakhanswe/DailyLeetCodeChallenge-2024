/* Question Link: https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/ */

var amountOfTime = function(root, start) {
    const adjacencyMap = new Map();
    buildAdjacencyMap(root, 0, adjacencyMap);

    const queue = [];
    queue.push(start);
    let minutes = 0;
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        let levelSize = queue.length;
        while (levelSize > 0) {
            const current = queue.shift();

            for (const neighbor of adjacencyMap.get(current)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
            levelSize--;
        }
        minutes++;
    }
    return minutes - 1;
};

function buildAdjacencyMap(current, parent, adjacencyMap) {
    if (current === null) {
        return;
    } 

    if (!adjacencyMap.has(current.val)) {
        adjacencyMap.set(current.val, new Set());
    }
    const neighbors = adjacencyMap.get(current.val);

    if (parent !== 0) {
        neighbors.add(parent);
    } 

    if (current.left !== null) {
        neighbors.add(current.left.val);
    } 

    if (current.right !== null) {
        neighbors.add(current.right.val);
    }

    buildAdjacencyMap(current.left, current.val, adjacencyMap);
    buildAdjacencyMap(current.right, current.val, adjacencyMap);
}
