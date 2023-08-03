
let a = ["--X", "X++", "X++"];
let b = ["++X", "++X", "X++"];
let c = ["X++", "++X", "--X", "X--"];

var finalValueAfterOperations = (operations) => {
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

console.log(finalValueAfterOperations(c));

