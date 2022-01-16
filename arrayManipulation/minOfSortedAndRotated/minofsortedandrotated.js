function minOfSortedAndRotated(arr) {
  var min = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] <= min) {
      min = arr[i];
      } 
    }
    return min;
  }

var x = minOfSortedAndRotated([1, 3, 5, 10, 2, 2]);
console.log("result: " + x);