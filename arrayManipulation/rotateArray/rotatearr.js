function rotateArr(sortedArr, shiftBy) {
  var start = 0;
  // Shifting The Array Until start Is The shiftBy Value
  while(start < shiftBy) {
    // popping The Last Value Adding It To Front
    sortedArr.unshift(sortedArr.pop());
    start++;
    }
    return sortedArr;
  }

var x = rotateArr([1, 2, 3], 2);
console.log("result: " + x);