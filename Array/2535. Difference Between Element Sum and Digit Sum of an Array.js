var differenceOfSum = function (nums) {
    let sum = 0
    let digitSum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        const digits = nums[i].toString().split("").map(Number);
        
        for (let j = 0; j < digits.length; j++) {
            digitSum += digits[j]
        }

    }
    return Math.abs(sum - digitSum)
};

let nums = [1, 15, 6, 3];

console.log(differenceOfSum(nums));