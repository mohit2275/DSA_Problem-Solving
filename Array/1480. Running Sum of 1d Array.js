
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

var runningSum = function (nums) {
    let sum = 0;

    return nums.map(i => sum += i)

};

let nums = [1, 2, 3, 4];


console.log(runningSum(nums));