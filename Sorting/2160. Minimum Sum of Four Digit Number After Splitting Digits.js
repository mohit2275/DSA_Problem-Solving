
var minimumSum = function(num) {
    let result = 0
    String(num).split("").sort().forEach((item,index) => {
        if(index === 0 | index === 1) {
            result += parseInt(item) * 10
            return
        }
        result += parseInt(item)
    })
    return result
};

let num = 2932
console.log(minimumSum(num));