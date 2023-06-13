let s = "Let's take LeetCode contest";

var reverseWords = function (s) {
    let s1 = s.split(' ');
    let word = [];

    for (i = 0; i < s1.length; i++) {
        let package = '';
        for (k = s1[i].length - 1; k >= 0; k--) {
            package += s1[i][k]
        }
        word.push(package)
    }
    return word.join(' ');
};

console.log(reverseWords(s));

