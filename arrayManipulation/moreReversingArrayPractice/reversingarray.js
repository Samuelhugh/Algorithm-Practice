function reverseArray(arr) {
  // Iterating Halfway Through The Array
  for (var i = 0; i < arr.length / 2; i++) {
    // temp Variable To Hold The indice I Want To Swap
    var temp = arr[i];
    console.log(arr);
    // Placing The Last Halfs Of The Arrays indexes
    // With The First Halfs indexes
    arr[i] = arr[arr.length - 1 - i];
    console.log(arr);
    // Placing The First Halfs indexes in The Last Halfs indexes 
    arr[arr.length - 1 - i] = temp;
    console.log(arr);
  }
  return arr;
}

var x = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("result: " + x);