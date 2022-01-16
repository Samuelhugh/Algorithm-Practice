function generateCoinChange(cents){
  var half = 0;
  var quarter = 0;
  var dime = 0;
  var nickle = 0;
  var penny = 0;
  
    while(cents >= 50) {
      cents -= 50;
      half++;
    }
    while(cents >= 25) {
      cents -= 25;
      quarter++;
    }
    while(cents >= 10) {
      cents -= 10;
      dime++;
    }
    while(cents >= 5) {
      cents -= 5;
      nickle++;
    }
    while(cents > 0) {
      cents -= 1;
      penny++;
    }
    
    console.log(half, quarter, dime, nickle, penny);
}

generateCoinChange(26);