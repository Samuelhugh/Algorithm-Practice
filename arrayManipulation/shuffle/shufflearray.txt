function shuffle(arr) {
  // While There Are elements In The Array
  for(var i = arr.length - 1; i > 0; i--) {
    // Pick A random index
    var x = Math.floor(Math.random() * (i + 1));
    // And Swap The Last/Current element With It
    var temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
    }
  return arr;
  }

var x = shuffle([1, 3, 4, 10]);
console.log("result: " + x);