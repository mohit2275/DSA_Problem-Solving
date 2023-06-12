// QUESTION 1
let nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};

console.log(sortColors(nums));

// QUESTION 2

let num = "1432219";
let k = 3;

function removeKDigits(num, k) {
    const stack = [];

    for (let i = 0; i < num.length; i++) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let result = stack.join('');

    result = result.replace(/^0+/, '');

    if (result === '') {
        return '0';
    }

    return result;
}

console.log(removeKDigits(num, k));