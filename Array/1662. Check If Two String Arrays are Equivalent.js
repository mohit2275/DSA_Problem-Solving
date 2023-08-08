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

let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

console.log(arrayStringsAreEqual(word1, word2));

