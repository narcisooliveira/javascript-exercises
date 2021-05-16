const reverseString = function(word) {
    var reverseWord = '';
    for (let index = word.length -1; index >= 0; index--) {
        reverseWord += word[index];
    }return reverseWord;
}

module.exports = reverseString
