var postorderTraversal = function (root) {
    let a = [];
    helper(root, a);
    return a;
};
function helper(root, arr) {
    if (root) {
        helper(root.left, arr);
        helper(root.right, arr)
        arr.push(root.val);
    }
}