function factorial(num) {
  var i = 1;
  var x = 1;
  while(i <= num) {
    x *= i;
    i++;
    }
  return x;
  }

var x = factorial(4);
console.log("result: " + x);