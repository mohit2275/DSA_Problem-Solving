var smallerNumbersThanCurrent = function (nums) {

    let newArr = []

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {

            if (nums[i] > nums[j]) {
                count++
            }
        }
        newArr.push(count);
    }
    return newArr;
}

let case1 = [8, 1, 2, 2, 3];
let case2 = [6, 5, 4, 8];
let case3 = [7, 7, 7, 7];

console.log(smallerNumbersThanCurrent(case1));