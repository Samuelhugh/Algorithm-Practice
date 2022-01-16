let string = "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"; //true
let string2 = "d(i{a}l[t]o)n{e"; //false
let string3 = "a(1)s[O(n]0{t)0}k"; //false

function parensValid(str) {
  // write a Array to push to in order to keep track of open parentheses,brackets, and braces
  let arr = [];
  // iterate through my string characters
  for(let i = 0; i < str.length; i++) {
    // create a Variable to compare the array elements to the String characters
    let length = arr[arr.length - 1];
    // checking for open parentheses, brackets, and braces
    if(str[i] == "(" || str[i] == "[" || str[i] == "{") {
      // if open parentheses push it to the array
      arr.push(str[i]);
      }
    // checking if my Array has an open parentheses, bracket, and brace to match the closed parenthese, bracket, and brace of the string
    else if(length == "(" && str[i] == ")" || length == "[" && str[i] == "]" || length == "{" && str[i] == "}") {
      // if it does then I want to pop it off my Array
      arr.pop();
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