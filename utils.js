function multiply(op1, op2) {
    return op1 * op2;
}

function strRevert(str) {
    return str.split('').reverse().join('');
}

module.exports = {
    multiply,
    strRevert
};
