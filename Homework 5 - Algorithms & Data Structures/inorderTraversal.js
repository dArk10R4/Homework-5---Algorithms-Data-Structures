var inorderTraversal = function (root) {
    let a = [];
    helper(root, a);
    return a;
};
function helper(root, arr) {
    if (root) {
        helper(root.left, arr);
        arr.push(root.val);
        helper(root.right, arr);
    }
}