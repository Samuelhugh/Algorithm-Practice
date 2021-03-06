// Example Of How The pop() built-in Method Works
function popFront(arr) {
  // Temporarily Store The First index In A Variable
  var store = arr[0];
  // loop Through The Array And Shift All The indexes To The Left
  for (var i = 0; i < arr.length - 1; i++) {
    console.log(arr);
    // Retriving The Next index Value And Setting It To The Previous index
    arr[i] = arr[i + 1];
  }
  console.log(arr);
  console.log("the length: " + arr.length);
  // Remove The Duplicate 
  arr.length = arr.length - 1;
  console.log(arr);
  console.log("the new length: " + arr.length);
  return store;
}

var x = popFront([1, 2, 3, 4]);
console.log("result: " + x);

//*******NOTE********
// Arrays are of fixed length.
// The last element, 4, is duplicated because of this.
// Using a single array,
// it's impossible to remove an element
//without filling the new gap with some value.