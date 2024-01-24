/* Question Link: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/ */

var pseudoPalindromicPaths  = function(root) {
    let res = { count : 0 };
    let counter = new Array(10).fill(0);
	
    dfs(root, res, counter);
    return res.count;
};

const isValid = (nums) => {
    let odd = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 === 1)
            odd++;
    }
    return odd < 2;
}

const dfs = (root, res, counter) => {
    if (!root) return;
    
    counter[root.val]++;
    
    if (!root.left && !root.right) {
        if (isValid(counter)) res.count += 1;
        return;
    }
    
    dfs(root.left, res, counter);
    root.left && counter[root.left.val]--;
    
    dfs(root.right, res, counter);
    root.right && counter[root.right.val]--;
}
