/* Question Link: https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/ */

var maxAncestorDiff = function(root) {
    if (!root) {
        return 0;
    }

    return dfs(root, root.val, root.val);

    function dfs(node, minAncestor, maxAncestor) {
        if (!node) {
            return maxAncestor - minAncestor;
        }

        minAncestor = Math.min(minAncestor, node.val);
        maxAncestor = Math.max(maxAncestor, node.val);

        const leftDiff = dfs(node.left, minAncestor, maxAncestor);
        const rightDiff = dfs(node.right, minAncestor, maxAncestor);

        return Math.max(leftDiff, rightDiff);
    }
};
