function theOracle(str) {
  var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];
  for(var i = 0; i < lifesAnswers.length; i++) {
    console.log(lifesAnswers[i])
    var roll = Math.floor(Math.random() * 19)+ 1;
    if(roll == i) {
      // console.log(arr[i]);
      return lifesAnswers[i];
      }
    }
  }

  console.log(theOracle("Will I Find True Love?"));