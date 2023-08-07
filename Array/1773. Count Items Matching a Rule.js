function countMatches(items, ruleKey, ruleValue) {
    let index = 0
    if (ruleKey == "color") index++
    if (ruleKey == "name") index = 2
    let count = 0
    for (let i of items) {
        if (i[index] == ruleValue) count++
    }
    return count
}

let items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]];
let ruleKey = "color";
let ruleValue = "silver";

console.log(countMatches(items, ruleKey, ruleValue));