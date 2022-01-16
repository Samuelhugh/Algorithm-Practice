// Need To Add The Least Significant Number Code
function lastDigitAToB(a, b) {
  var product = 1;
  while(b != 0) {
    product *= a;
    console.log(product);
    b--;
    }
  var lastDigit = product%10;
  console.log(lastDigit);
  return product;
  }

var x = lastDigitAToB(4, 4);
console.log("Result: " + x);