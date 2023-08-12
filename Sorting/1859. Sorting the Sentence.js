var sortSentence = function (s) {
    let one = s.split(' ')
    let result = [];
    for (i = 0; i < s.length; i++) {
        for (let j = 0; j < one.length; j++) {
            if (one[j].includes(i)) {
                result.push(one[j].slice(0, -1));
            }
        }
    }

    return result.join(' ')
};

let s = "is2 sentence4 This1 a3"

console.log(sortSentence(s));