var preorderTraversal = function (root) {
    if (!root) { return [] }
    let a = [];
    branch(root, a)
    return a;

};
function branch(p, arr) {
    if (p !== null) {
        arr.push(p.val);
        branch(p.left, arr);
        branch(p.right, arr);
    }
}