let readlineSync = require(`readline-sync`);
let animalArray = [`monkey`, `lion`,`elephant`];
let randomAnimal= Math.floor(Math.random() * animalArray.length);
let suspiciousAnimal= animalArray[randomAnimal]

console.log( "Welcome to The Magician!" );
console.log( "Please help me escape the circus and I might show you a cool trick.\n");

let option = readlineSync.question( "Should I Go left, right, forward?\n\n" );

switch(option) {
  case "left":
    console.log( "Great, they caught me. Now I can't show you the tricks I promised.\n\n" );
    break;
  case "right":
    console.log( "Awesome! Thanks for helping me escape. Now I can show you a nice trick.\n");
    
    let userNum = readlineSync.questionInt(`Choose a number between two and ten.\n\n`);
    let weirdNum = readlineSync.questionInt(`Have you celebrated your birthday this year already? If you have then enter 1770,
    and if you haven't enter 1769.\n\n`);
    let playersAge = (userNum * 2 + 5) * 50 + weirdNum;
    console.log(`Now subtract your year of birth from ${playersAge}. The first number is your originally chosen number, and the second and third numbers are your age.\n`);
    console.log(`For instance, if your final number is 330, your original number is 3 and your age is 30.\n`)
    break;
  case "forward":
    console.log( `I've escaped! Thanks a lot, now I don't have to put up with the contortionist. But I think the ${suspiciousAnimal} saw me.\n\n`);
  
    break;
  default: 
    console.log( "Please show me where to go or I'll have to put up with those clowns" );
} 


