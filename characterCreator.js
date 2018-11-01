var statRoller = require("./statRoller.js");

const DiceRoller = require("./DiceRoller.js");
var diceRoller = new DiceRoller();

// this is the character creator constructor that will create a character object
function CharacterCreator(name, character_class) {
    // this will represent the name of the character which the player gets to choose
    this.name = name;
    // this will represent the class of the character which the player gets to choose
    this.class = character_class;
};

module.exports = CharacterCreator;