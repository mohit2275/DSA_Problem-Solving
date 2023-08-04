var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (i = 0; i < operations.length; i++) {
        if (operations[i] === "++X" || operations[i] === "X++") {
            x++;
        }
        else {
            x--;
        }
    }
    return x;
};

let operations = ["--X", "X++", "X++"]

console.log(finalValueAfterOperations(operations));