function reverse(arr) {
  // loop Through The Array And Stop At The Halfway Point.
  for(var i = 0; i < arr.length / 2; i++) {
    // Placing The Values At i, Starting At The Beginning Into temp
    var temp = arr[i];
    // This Will Swap The Value At The index of i,
    // With Its Mathcing Counterpart Until It reaches The Halfway Point.
    arr[i] = arr[arr.length - 1 - i];
    // Placing The Value Of i That I Stored In temp,
    // Into Its Matching Counterpart To Reverse Any Array.
    arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }

var x = reverse(["a", "b", "c", "d", "e"]);
console.log("Result: " + x);