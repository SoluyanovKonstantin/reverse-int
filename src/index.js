module.exports = function reverse (n) {
    n = n > 0 ? n : n*(-1);
    return Number(String(n).split('').reverse().join(''));
}
