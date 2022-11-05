var name = prompt("Please enter your name:");

var firstChar = name.slice(0,1);

firstChar = firstChar.toUpperCase();

var numberOfChar = name.length;

var remainingChar = name.slice(1,numberOfChar);

remainingChar = remainingChar.toLowerCase();

var finalName = firstChar + remainingChar;

alert("Hello, " + finalName +".");
