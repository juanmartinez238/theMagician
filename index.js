let readlineSync = require(`readline-sync`);

readlineSync.setDefaultOptions({limit:[`Yes`, `No`]});
let theMagician = readlineSync.question(`Would you like to play, The Magician?\n`);
if (theMagician == `Yes`){
    console.log(`Brave, I like it! Let's begin our first game...and if you pass level 3 I'll even show you a neat trick!`);
} else {
    console.log(`Why not? C'mon you're brave, I know it.`)
    theMagician;
}