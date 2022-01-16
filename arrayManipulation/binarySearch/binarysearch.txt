function binarySearch(sortedArr, val) {
  // Variable To Initalize My Search
  var start = 0;
  // Variable To end My Search
  var end = sortedArr.length - 1;
  while(start <= end) {
    // Variable To Start My Search In The Middle Of The Sorted Array
    var middle = Math.floor((start + end) / 2);
    // if block To Check The middle, left, and right halfs
    if(sortedArr[middle] === val) {
      // Found The Key
      return sortedArr[middle];
      }
    else if(sortedArr[middle] < val) {
      // Continue Searching The Right
      start = middle + 1;
      }
    else {
      // Continue Searching The Left
      end = middle - 1;
      }
    }
  return "Value Not Found";
  }

var x = binarySearch([3, 5, 8, 4, 6, 9, 10, 11, 15, 18, 20], 11);
console.log("result: " + x);