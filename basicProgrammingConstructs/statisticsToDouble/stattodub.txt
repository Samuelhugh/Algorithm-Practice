function diceRoll() {
  var min = 0;
  var max = 0;

  for(var i = 1; i < 20; i++) {
    var roll1 = Math.floor(Math.random() * 6) + 1;
    console.log("roll 1: " + roll1);
    var roll2 = Math.floor(Math.random() * 6) + 1;
    console.log("roll 2: " + roll2);
  
    var numOfRolls = i;
    console.log("number of rolls: " + numOfRolls);
  
    var total = 2;
  
    if(roll1 === roll2) {
      console.log("doubleeeeee!!!!!!!!!!!!!!");
      return [roll1, roll2];
      }
    if(roll1 !== roll2) {
      var sum = roll1 + roll2;
      var avg = sum/total;
      console.log("this is the avg: " + avg);
      if(roll1 > roll2) {
        max = roll1;
        console.log("the current max: " + max);
        }
      else if(roll2 > roll1) {
        max = roll2;
        console.log("the current max: " + max);
        }
        }
      if(roll1 < roll2) {
          min = roll1;
          console.log("the current min: " + min);
        }
      else if(roll2 < roll1) {
          min = roll2;
          console.log("the current min: " + min);
        }
      }
    }

var playerRoll = diceRoll();
console.log("The player rolled:  " + playerRoll);