let s = "is2 sentence4 This1 a3";
var sortSentence = function (s) {
    let one = s.split(' ')
    let result = [];
    for (i = 1; i <= one.length; i++) {
        for (let j = 0; j < one.length; j++) {
            if (one[j].includes(i)) {
                result.push(one[j].slice(0, -1));
            }
        }
    }
    return result.join(' ')
};
console.log(sortSentence(s));




