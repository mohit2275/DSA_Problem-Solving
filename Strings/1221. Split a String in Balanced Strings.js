let s = "RLRRLLRLRL";
// let s = "RLRRRLLRLL";
// let s = "LLLLRRRR";

var balancedStringSplit = function (s) {
    let count = 0;
    let equal = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            equal--;
        }
        else if (s[i] === "L") {
            equal++;
        }
        if (equal === 0) {
            count++
        }
    };
    return count;
}

console.log(balancedStringSplit(s));