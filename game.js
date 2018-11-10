const CharacterCreator = require("./characterCreator.js");
var rogue = new CharacterCreator("Chris", "rogue");
var mage = new CharacterCreator("Kyle", "mage");
var warrior = new CharacterCreator("Sara", "warrior");
var divider = "\n----------------------------------------\n";
console.log(rogue);
//console.log(divider);
// console.log(mage);
// console.log(divider);
// console.log(warrior);
rogue.levelUp();
setTimeout(function() {
    console.log(divider);
    console.log(rogue);
}, 5000)