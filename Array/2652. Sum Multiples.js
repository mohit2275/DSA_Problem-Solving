// Given n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

var sumOfMultiples = function (n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            count += i;
        }
    }
    return count
};

let n = 7;
console.log(sumOfMultiples(n));