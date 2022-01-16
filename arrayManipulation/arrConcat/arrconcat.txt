// Example Of passing by reference And time-space tradeoff 
function arrConcat(arr, arr2) {
  // Storing The Copies Of The Arrays In Variables
  // So The Originals In The Parameters Aren't Affected
  var arr3 = arr;
  var arr4 = arr2;
  // New Array To Hold My Concatenated Arrays
  var newArr = [];
  // Concatenating The Arrays To The New Array
  newArr.push(arr3);
  newArr.push(arr4);
  return newArr;
  }

var x = arrConcat([1, 3, 4, 10], ["a", "b", "c", "d"]);
console.log("result: " + x);