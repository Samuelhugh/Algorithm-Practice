// Test cases
let sortedArr = [1, 2, 4, 5, 7, 8, 10];

// Function to join consecutive indexes values
function bookIndex(sortedArray) {

    // Empty String to append consecutive indices
    let str = "";
    // keep track of the value of the first element in a consecutive sequence
    let storedIndexOfArray;

    for(let indexOfArray in sortedArray) {
        // To check if I was getting the correct Values
        // console.log(sortedArray[IndexOfArray] + 1, sortedArray[IndexOfArray + 1]);
        // Making sure the last element is added to the String
        if(indexOfArray == sortedArray.length - 1) {
            str += sortedArray[indexOfArray];
        }
        // Check to see if that IndexOfArray is consecutive
        else if(sortedArray[indexOfArray] + 1 == sortedArray[parseInt(indexOfArray) + 1]) {
            if (indexOfArray == 0) {
                storedIndexOfArray = sortedArray[indexOfArray];
            }
            // console.log("its consecutive!");
            // The Current element is consecutive to the next element
            continue;
        }
        // if the element are not consecutive
        else {
            if (storedIndexOfArray) {
                str += storedIndexOfArray +'-';
            }
            // Keeping track of the start of the next sequence
            storedIndexOfArray = sortedArray[parseInt(indexOfArray) + 1];
            str += sortedArray[indexOfArray] + ", ";
        }
    }

    return str;
}

console.log(bookIndex(sortedArr));