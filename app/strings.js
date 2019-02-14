stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let output = '';
    const obj = {};
    let i = 0;
    let currentChar = '';
    let prevChar = '';
    currentChar = str[i];
    prevChar = str[i];
    while (i < str.length) {
      currentChar = str[i];
      if (obj[currentChar] === undefined) {
        output += currentChar;
        obj[currentChar] = 1;
      } else if (amount > obj[currentChar]) {
        output += currentChar;
        obj[currentChar] += 1;
      } else if (prevChar !== currentChar) {
        output += currentChar;
        delete obj[currentChar];
      }
      prevChar = currentChar;
      i += 1;
    }
    return output;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let output = '';
    let i = str.length - 1;
    while (i >= 0) {
      output += str[i];
      i -= 1;
    }
    return output;
  },
};
