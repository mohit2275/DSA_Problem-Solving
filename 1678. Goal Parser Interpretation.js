let command = "G()(al)";
// let command = "G()()()()(al)"
// let command = "(al)G(al)()()G"

var interpret = function (command) {
    return command.replaceAll('()', 'o').replaceAll("(al)", "al");
};

console.log(interpret(command));



