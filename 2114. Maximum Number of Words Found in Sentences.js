let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

var mostWordsFound = (sentences) => {
    let count = 0;
    for (i = 0; i < sentences.length; i++) {
        let x = sentences[i].split(' ').length;
        if (x > count) {
            count = x;
        }
    }
    return count;
};

console.log(mostWordsFound(sentences));



