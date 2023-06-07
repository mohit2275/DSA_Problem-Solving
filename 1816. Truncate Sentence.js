// let s = "Hello how are you Contestant";
// let s = "What is the solution to this problem";
let s = "chopper is not a tanuki";

let k = 5;

var truncateSentence = function (s, k) {
    s = s.split(' ');
    sNew = [];
    for (i = 0; i < k; i++) {
        sNew.push(s[i])
    }
    return sNew.join(' ');
};

console.log(truncateSentence(s, k));