var truncateSentence = function (s, k) {
    s = s.split(' ');
    sNew = [];
    for (i = 0; i < k; i++) {
        sNew.push(s[i])
    }
    return sNew.join(' ');
};

let s = "Hello how are you Contestant";
let k = 4;

console.log(truncateSentence(s, k));
