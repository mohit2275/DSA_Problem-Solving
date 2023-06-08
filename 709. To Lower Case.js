s = "Hello";

var toLowerCase = function (s) {
    let arr = "";
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            arr += String.fromCharCode(code + 32);
        }
        else {
            arr += s.charAt(i);
        }
    }
    return arr;
};

console.log(toLowerCase(s));