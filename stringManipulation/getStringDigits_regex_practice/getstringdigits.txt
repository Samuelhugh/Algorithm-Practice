let play = "0s1a3y5w7h9a2t4?6!8?0";

function getStringDigits(str) {
  return str.replace(/[^0-9]/g,"");
  }
  
console.log(getStringDigits(play));