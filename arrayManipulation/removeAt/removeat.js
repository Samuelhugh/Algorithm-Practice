// Need To Figure Out How To Remove The Empty index
function removeAt(arr, idx) {
  var arr2 = [];
  var store = arr[idx];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] != arr[idx]) {
      arr2[i] = arr[i];
      console.log(arr2);
      }
  }
  return store;
  }

var x = removeAt([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log("result: " + x);