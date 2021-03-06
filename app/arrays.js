arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.
    for (let i = 0; i < arr.length;) {
      if (arr[i] === item) {
        return i;
      }
      i += 1;
    }
    return -1;
  },

  /**
   * Determine the sum of the items of arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
    let i = 0;
    let totalSum = 0;
    while (i < arr.length) {
      totalSum += arr[i];
      i += 1;
    }
    return totalSum;
  },

  /**
   * Create a new array with the same items as arr, excluding item 
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
      i += 1;
    }
    return result;
  },


  removeWithoutCopy: function removeWithoutCopy(arr, item) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
      i += 1;
    }
    arr.splice(0, arr.length);
    i = 0;
    while (i < result.length) {
      arr.push(result[i]);
      i += 1;
    }
    return arr;
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
    arr.push(item);
    return arr;
  },

  /**
   * Removes a number, item, from the end of an array, arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
    arr.pop();
    return arr;
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
    let i = 0;
    const result = [];
    result.push(item);
    while (i < arr.length) {
      result.push(arr[i]);
      i += 1;
    }
    return result;
  },


  /**
   * Removes the first element from an array
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
    let i = 1;
    const result = [];
    while (i < arr.length) {
      result.push(arr[i]);
      i += 1;
    }
    return result;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   * 
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length) {
      result.push(arr1[i]);
      i += 1;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j += 1;
    }

    return result;
  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {
    const result = [];
    let i = 0;
    const temp = arr.slice(index);
    while (i < arr.length + 1) {
      if (i === index) {
        result.push(item);
        break;
      } else {
        result.push(arr[i]);
      }
      i += 1;
    }
    i = 0;
    while (i < temp.length) {
      result.push(temp[i]);
      i += 1;
    }
    return result;
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
    let result = 0;
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === item) {
        result += 1;
      }
      i += 1;
    }
    return result;
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {
    let output = {};
    const result = [];
    output = arr.reduce((acc, cur) => {
      if (acc[cur] === undefined) {
        acc[cur] = 1;
      } else {
        acc[cur] += 1;
      }
      return acc;
    }, {});
    const keys = Object.keys(output);
    let i = 0;
    while (i < keys.length) {
      if (output[keys[i]] > 1) {
        result.push(Number(keys[i]));
      }
      i += 1;
    }
    return result;
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   * 
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
    let i = 0;
    const result = [];
    while (i < arr.length) {
      result.push(arr[i] * arr[i]);
      i += 1;
    }
    return result;
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   * 
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
    let i = 0;
    const result = [];
    while (i < arr.length) {
      if (arr[i] === target) {
        result.push(i);
      }
      i += 1;
    }
    return result;
  },
};
