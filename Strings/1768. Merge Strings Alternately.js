let word1 = "abc";
let word2 = "pqr";

var mergeAlternately = function (word1, word2) {
    let result = [];
    let count = Math.max(word1.length, word2.length)

    for (i = 0; i < count; i++) {
        result.push(word1[i])
        result.push(word2[i])
    }
    return result.join('');
};

console.log(mergeAlternately(word1, word2));