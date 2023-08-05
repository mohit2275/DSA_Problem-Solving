
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies);
    const res = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            res.push(true);
        } else {
            res.push(false)
        };
    }
    return res;
}

let candies = [2, 3, 5, 1, 3];
// let candies = [4, 2, 1, 1, 2];

let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));

