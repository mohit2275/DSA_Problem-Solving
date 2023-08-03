// let a = [5, 0, 1, 2, 3, 4];

function buildArray(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
};

let a = [0, 2, 1, 5, 3, 4];

buildArray(a);