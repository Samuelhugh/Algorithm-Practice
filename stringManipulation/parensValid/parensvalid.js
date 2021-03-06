let string = "y(3(p)p(3)r)s"; //true
let string2 = "n(0(p)3"; //false
let string3 = "n)0(t(0)k"; //false

function parensValid(str) {
  // write a Array to push to in order to keep track of open parentheses
  let arr = [];
  // iterate through my string characters
  for(let i = 0; i < str.length; i++) {
    // create a Variable to compare the array elements to the String characters
    let length = arr[arr.length - 1];
    // checking for open parentheses
    if(str[i] == "(") {
      // if open parentheses push it to the array
      arr.push(str[i]);
      }
    // checking if my Array has an open parentheses to match the closed parentheses of the string
    else if(length == "(" && str[i] == ")") {
      // if it does then I want to pop it off my Array
      arr.pop();
      }
    // I am checking for a closed parentheses if there is no matching open parentheses in the Array
    else if(str[i] == ")") {
      // if it finds a closed parentheses but no matching open parentheses then return false
      return false;
      }
    }
  
  // checking if the Array has no elements which means it is balanced/valid
  if(arr.length == 0) {
    return true;
    }
  // else if the Array does have elements then return false
  else {
    return false;
    }
  }
  
console.log(parensValid(string3));