function insertAt(arr, idx, val) {
  console.log(arr);
  arr[idx] = val;
  console.log(arr);
  return arr;
  }
    
var x = insertAt([1, 2, 3, 4], 2, 8);
console.log("result: " + x);