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