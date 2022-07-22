let play = {};
play.fun = "Play That Funky Music";
// console.log(typeof play.fun);

function removeBlanks(str) {
  // Turning The Object (String) Into An Array Then Removing The Blanks
  let string = str["fun"].split(" ").join("");
  // console.log(string);
  return str;
  }
  
console.log(removeBlanks(play));