let sentence = "thequickbrownfoxjumpsoverthelazydog";
// let sentence = "leetcode";

    var checkIfPangram = function (sentence) {
        let set = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for (let i = 0; i < set.length; i++) {
            if (sentence.indexOf(set[i]) === -1) {
                return false;
            }
        }
        return true;
    };

console.log(checkIfPangram(sentence));