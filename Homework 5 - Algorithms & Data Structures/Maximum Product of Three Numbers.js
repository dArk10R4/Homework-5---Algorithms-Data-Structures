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