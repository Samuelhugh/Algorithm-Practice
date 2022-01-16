// Example Of How The unShift Method Works
function pushFront(arr, num) {
  // Initializing The for loop Starting At The Last index Of The Array
  for(var i = arr.length - 1; i >= 0; i--) {
    // Shifting The Array Back One index,
    // And Adding The Value Of The index Before The New Added index To That index
    arr[i + 1] = arr[i];
    }
    // Adding The num To The First index
    arr[0] = num;
  }

pushFront([1, 2, 3, 4], 8);