// test cases
let string = "a x a"; // true
let string2 = "racecar"; // true
let string3 = "Dud"; // false
let string4 = "oho!"; // false

// Function that is going to test if the String is a palindrome
function isPalindrome(str) {
  // Split the String into an Array so I can compare it
  let stringArr = str.split("");
  console.log(stringArr);
  // iterate through the String
  for(let i = 0; i < stringArr.length / 2; i++) {
    // checking to see if the character at the beginning of the String is not same as its matching mirroring character at the end of String
    if(stringArr[i] !== stringArr[stringArr.length - 1 - i]) {
      // return false if the String is not a strict palindrome
      return false;
      }
    }
    // return true if it is a palindrome
    return true;
  }

console.log(isPalindrome(string));
console.log(isPalindrome(string2));
console.log(isPalindrome(string3));
console.log(isPalindrome(string4)); 
  
// just testing out assert() method
// console.assert(isPalindrome(string) == true, "test case string passed!")
// console.assert(isPalindrome(string2) == true, "test case string2 passed!")
// console.assert(isPalindrome(string3) == false, "test case string3 failed")
// console.assert(isPalindrome(string4) == false, "test case string4 failed")