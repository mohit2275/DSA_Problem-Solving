let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

// let word1 = ["a", "cb"];
// let word2 = ["ab", "c"];

// let word1 = ["abc", "d", "defg"];
// let word2 = ["abcddefg"];

var arrayStringsAreEqual = function (word1, word2) {
    let one = '';
    let two = '';

    for (i = 0; i < word1.length; i++) {
        one += word1[i]
    }
    for (k = 0; k < word2.length; k++) {
        two += word2[k]
    }

    if (one == two) {
        return true;
    }

    else {
        return false;
    }
};

console.log(arrayStringsAreEqual(word1, word2));