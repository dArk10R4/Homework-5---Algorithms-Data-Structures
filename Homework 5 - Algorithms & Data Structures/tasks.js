// Valid anagram
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    s = s.split("").sort();
    t = t.split("").sort();
    for (let i = 0; i < s.length; i++) {
        if (s[i] != t[i]) {
            return false;
        }
    }
    return true;
}
// containsDuplicate
var containsDuplicate = function (nums) {
    nums = nums.sort()
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) { return true; }
    }
    return false;
};
// Maximum Product of Three Numbers
var maximumProduct = function (nums) {
    if (nums.length === 3) {
        return nums[0] * nums[1] * nums[2];
    }
    nums = nums.sort(function (a, b) { return a - b });
    if (nums[0] >= 0 || nums[nums.length - 1] < 0) {
        return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    }
    if (nums[nums.length - 1] <= 0) { return 0 }
    if (nums[0] * nums[1] * nums[nums.length - 1] > nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]) {
        return nums[0] * nums[1] * nums[nums.length - 1]
    }
    return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
};
// guess number
var guessNumber = function (n) {
    let left = 1;
    let right = n;
    while (right >= left) {
        let m = Math.floor((left + right) / 2)
        if (guess(m) == 0) { return m }
        if (guess(m) > 0) { left = m + 1 }
        if (guess(m) < 0) { right = m - 1 }
    }
};
// Find First and Last Position of Element in Sorted Array
var searchRange = function (nums, target) {
    let ans = []
    let left = 0;
    let right = nums.length;
    let m = Math.floor((right + left) / 2);
    for (let i = 0; i < Math.floor(Math.log2(nums.length)) + 1; i++) {
        if (nums[m] == target) {
            for (let j = 0; j < Math.floor((right + left) / 2) + 2; j++) {
                if (nums[m - j] !== target) {
                    ans.push(m - j + 1);
                    break;
                }

            }
            for (let j = 0; j < Math.floor((right + left) / 2) + 2; j++) {
                if (nums[m + j] != target) {
                    ans.push(m + j - 1);
                    break;
                }
            }
            break;

        }
        if (nums[m] > target) {
            right = m;
        }
        if (nums[m] < target) {
            left = m;
        }
        m = Math.floor((right + left) / 2);
    } if (nums[m] != target) { ans = [-1, -1] }
    return ans;
};


// first bad version
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (isBadVersion(1)) { return 1 }
        let left = 1;
        let right = n;

        while (left < right) {
            let m = Math.floor((right + left) / 2);
            if (isBadVersion(m)) {
                right = m
            }
            else { left = m }
            if (left == right - 1) { return right }

        }

    };

};
//sqrt
var mySqrt = function (x) {
    x = x.toString();
    if (x == 0) { return 0 }
    let ans = "0";
    let b;
    var q;
    var a;
    if (x.length % 2 == 1) {
        q = x.slice(0, 1);
        a = -1;
    } else { q = x.slice(0, 2); a = 0; }
    for (let i = 1; i <= Math.ceil(x.length / 2); i++) {
        for (let j = 0; j < 10; j++) {
            if ((parseInt(((parseInt(ans) * 2).toString() + j.toString())) * j <= parseInt(q)) && (parseInt(((parseInt(ans) * 2).toString() + (j + 1).toString())) * (j + 1) > parseInt(q))) {
                q = (parseInt(q) - parseInt(((parseInt(ans) * 2).toString() + j.toString())) * j).toString() + x.substr((a + 2 * i), 2);
                ans = ans + j.toString();
                break;
            }
        }
    }
    return parseInt(ans.slice(1));
};
//is valid pharantheses
var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false
    }
    let stack = []
    for (elem of s) {
        if (elem === '(') {
            stack.push(1)
        }
        if (elem === '[') {
            stack.push(2)
        }
        if (elem === '{') {
            stack.push(3)
        }
        if (elem === ')') {
            if (stack.length === 0) { return false }
            let a = stack.pop()
            if (a !== 1) {
                return false
            }
        }
        if (elem === ']') {
            if (stack.length === 0) { return false }
            let a = stack.pop()
            if (a !== 2) {
                return false
            }
        }
        if (elem === '}') {
            if (stack.length === 0) { return false }
            let a = stack.pop()
            if (a !== 3) {
                return false
            }
        }

    }
    if (stack.length === 0) { return true }
    else { return false }

};
//backspaceCompare
var backspaceCompare = function (s, t) {
    let s1 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            s1.pop()
        }
        else { s1.push(s[i]) }
    }
    let t1 = [];
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            t1.pop()
        } else { t1.push(t[i]) }
    }
    return s1.join('') === t1.join('');
};
//evalRPN
var evalRPN = function (tokens) {
    let a = []
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case '*':
                a.push(Number(a.pop()) * Number(a.pop()));
                break;
            case '+':
                a.push(Number(a.pop()) + Number(a.pop()));
                break;
            case '-':
                a1 = Number(a[a.length - 2]) - Number(a[a.length - 1])
                a.pop();
                a.pop();
                a.push(a1);
                break;
            case '/':
                let a2 = Number(a[a.length - 2]) / Number(a[a.length - 1])
                a.pop();
                a.pop();
                console.log(a2)
                if (a2 >= 0) {
                    a.push(Math.floor(a2));
                } else { a.push(Math.ceil(a2)); }

                break;
            default:
                a.push(tokens[i])
                break;
        }

    }
    return a[0]
};
//invertTree
var invertTree = function (root) {
    if (!root) { return null }

    let tmp = root.left;
    root.left = root.right
    root.right = tmp
    invertTree(root.left);
    invertTree(root.right)
    return root;
};
// isSymmetric
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
// preorderTraversal
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
// inorderTraversal
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
//postorderTraversal
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