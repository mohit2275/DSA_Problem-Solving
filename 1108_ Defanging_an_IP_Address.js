let address = "1.1.1.1";

function defangIPaddr(address) {
    return address.replaceAll('.', '[.]')
};
console.log(defangIPaddr(address));



