var restoreString = function (s, indices) {
    let s_new = '';
    for (let i = 0; i < s.length; i++) {
        s_new += s[indices.indexOf(i)];
    }
    return s_new;
};

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));
