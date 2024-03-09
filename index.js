const numberToBengliWords = require("number-to-bengli-words");

let toBengaliWord = function (number) {
    return numberToBengliWords.toBengaliWords(number);
}

module.exports = {
    toBengaliWord
}