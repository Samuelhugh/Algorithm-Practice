function removeNegatives(arr) {
  // Iterating Through The Array
  for(var i = 0; i < arr.length; i++) {
    // Checking if The index Is Less Than 0
    if(arr[i] < 0) {
      // Removing That Index
      arr.splice(i, 1);
      }
    }
    return arr;
  }

var x = removeNegatives([1, -2, 3, -4, 5, -6, 7, -8, 9]);
console.log("result: " + x);