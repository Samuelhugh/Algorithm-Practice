function fibonacci(num) {
  if(num <= 1) {
    return num;
    }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

var x = fibonacci(3);
console.log("Result: " + x);