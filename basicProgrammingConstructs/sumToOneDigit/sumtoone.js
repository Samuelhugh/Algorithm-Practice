function sumToOne(num) {
  var sum = 0;
  var start = 1;
  var end = num;
  
  while(start <= end) {
    sum += start;
    start++;
    }
    return sum;
}

var x = sumToOne(5);
console.log("Result: " + x);