let acron = "there's no free lunch - gotta pay yer way";
let acron2 = "Live from New York, it's Saturday Night!";

// Return The First Letter Of Each Word
function acronyms(str) {
  // Turn My String Into An Array So That Is Easier To Work With
  let string = str.split(" ");
  // Creating A Variable To Hold My Acronyms
  let letterVault = "";
  // Iterate Over My String Array
  for(let i = 0; i < string.length; i++) {
    // Adding Each Letter To The Empty String
    letterVault += string[i].charAt(0).toUpperCase();
    }
  return letterVault;
  }
  
console.log(acronyms(acron2));