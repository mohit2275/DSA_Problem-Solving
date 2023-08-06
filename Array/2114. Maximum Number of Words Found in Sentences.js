var mostWordsFound = (sentences) => {
    let count = 0;
    for (let i = 0; i < sentences.length; i++) {
        let x = sentences[i].split(' ').length;
        if (x > count) {
            count = x
        }
    }
    return count;
};

// let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let sentences = ["please wait", "continue to fight", "continue to win"];


console.log(mostWordsFound(sentences));