let s = "codeleet"; // 8

let indices = [4, 5, 6, 7, 0, 2, 1, 3];

var restoreString = function (s, indices) {
    let s_new = '';

    for (i = 0; i < s.length; i++) {
        s_new += s[indices.indexOf(0)];
    }
    return s_new;
};

console.log(restoreString(s, indices));




