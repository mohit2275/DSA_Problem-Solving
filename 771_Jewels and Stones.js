// CASE 1 -
let jewels = "aA";
let stones = "aAAbbbb";

//CASE 2 -
// let jewels = "z";
// let stones = "ZZ"


var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (i = 0; i < stones.length; i++) {
        for (k = 0; k < jewels.length; k++)
            if (jewels[k] == stones[i]) {
                count++;
            }
    }
    return count;
};
console.log(numJewelsInStones(jewels, stones));