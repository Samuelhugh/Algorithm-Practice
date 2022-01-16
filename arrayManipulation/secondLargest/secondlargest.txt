function secondLargest(arr) {
  var firstLargest = 0;
  var secondLargest = 0;
  for(var i = 0; i < arr.length; i++) {
    if(firstLargest < arr[i]) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
      }
    else if (secondLargest < arr[i]) {
      if(arr[i] != firstLargest) {
        secondLargest = arr[i];
        }
      }
    }
  return secondLargest;
  }

var x = secondLargest([1, 3, 4, 10, 5, 2, 5, 3, 100, 2, 3, 200]);
console.log("result: " + x);