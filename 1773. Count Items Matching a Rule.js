let items = [
    //    0       1      2
    ["phone", "blue", "pixel"],   // item 1
    ["computer", "silver", "lenovo"],   // item 2
    ["phone", "gold", "iphone"]    // item 3
];


// items[i] = [typei, colori, namei]

let ruleKey = "color";
let ruleValue = "gold";

function countMatches(items, ruleKey, ruleValue) {

    let index = 0; // type  -1

    if (ruleKey == "color") {
        index++    // color - 1 
    }

    if (ruleKey == "name") {
        index = 2    // name -2
    }

    let count = 0
    for (let i of items) {
        if (i[index] == ruleValue) {
            count++
        }
    }
    return count;
}

console.log(countMatches(items, ruleKey, ruleValue));
