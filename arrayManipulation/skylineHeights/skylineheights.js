function skylineHeights(arr) {
  // Iterate Through The Array
  for(var i = 0; i < arr.length; i++) {
    // Find The Buildings Above Street Level
    if(arr[i] >= 0) {
      // if Each index Is Bigger Than The Next Then Skip It
      if(arr[i] > arr[i + 1]) {
        continue;
        }
	// else Remove That index 
        else {
          arr.splice(i, 1);
        }
      }
    // else If The Building Is Lower Than Street Level Remove It
    else { 
      arr.splice(i, 1);
      }
    }
    return arr;
  }

var x = skylineHeights([1, -1, 7, 3]);
console.log("result: " + x);