var isSymmetric = function (root) {
    console.log(root.val)
    if (!root) { return false }
    function check(a, b) {
        if (a === null && b === null) { return true; }
        if (a === null || b === null || a.val !== b.val) { return false }
        return (check(a.left, b.right) && check(a.right, b.left));
    }
    return check(root.left, root.right)
};