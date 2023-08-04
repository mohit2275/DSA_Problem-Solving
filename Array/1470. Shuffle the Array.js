var shuffle = function (nums, n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(nums[i], nums[i + n])
    }
    return newArr;
};

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;

console.log(shuffle(nums, n));


