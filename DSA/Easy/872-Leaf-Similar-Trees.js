/* Question Link: */

var leafSimilar = function(root1, root2) {
    
    let leaves1 = [];
    let leaves2 = [];

    let dfs = function(node, leaves){
        if(!node) return;
        if(!node.left && !node.right){
            leaves.push(node.val);
            return;
        }

        dfs(node.left, leaves);
        dfs(node.right, leaves);
    }

    dfs(root1, leaves1);
    dfs(root2, leaves2);

    return JSON.stringify(leaves1) === JSON.stringify(leaves2);
};
