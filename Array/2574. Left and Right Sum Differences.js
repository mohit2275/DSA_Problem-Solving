let leftRigthDifference = (nums) => {
    let leftSum = [0]
    let rightSum = new Array(nums.length).fill(0)

    let answer = []
    for (let i = 1; i < nums.length; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1]

    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i])
    }

    return answer
};

let nums = [10, 4, 8, 3];

console.log(leftRigthDifference(nums));