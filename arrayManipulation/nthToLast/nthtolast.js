function nthToLast(arr, n) {
  return arr[arr.length - n];
  }

var x = nthToLast([1, 3, 5, 10, 5, 2, 5, 3, 100, 2, 3, 200], 4);
console.log("result: " + x);