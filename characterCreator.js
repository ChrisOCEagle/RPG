var statRoller = require("./statRoller.js");

const DiceRoller = require("./DiceRoller.js");
var diceRoller = new DiceRoller();

const inquirer = require("inquirer");

// this is the character creator constructor that will create a character object
function CharacterCreator(name, character_class) {
    // this will represent the name of the character which the player gets to choose
    this.name = name;
    // this will represent the class of the character which the player gets to choose
    this.class = character_class;
    // the individual stats for the character that will exist as objects with two properties:
    // score and modifier, score is determined by the function statRoller while the modifier is
    // determined by the score property.
    this.stats = {
        "Strength": new statRoller(),
        "Dexterity": new statRoller(),
        "Constitution": new statRoller(),
        "Intelligence": new statRoller(),
        "Wisdom": new statRoller(),
        "Charisma": new statRoller()
    };
    // the character's class will determine what their total hitpoints are,
    // whether they have magicka or stamina and the total points of each,
    // their hit dice total, and the type of magicka dice or stamina dice as well
    if (this.class === "warrior") {
        this.hitDice = diceRoller.d12;
        this.staminaDice = diceRoller.d6;
        this.hitPoints = this.hitDice() + this.stats.Constitution.modifier;
        this.staminaPoints = this.staminaDice() + this.stats.Constitution.modifier;
    };
    if (this.class === "rogue") {
        this.hitDice = diceRoller.d8;
        this.staminaDice = diceRoller.d10;
        this.hitPoints = this.hitDice() + this.stats.Constitution.modifier;
        this.staminaPoints = this.staminaDice() + this.stats.Constitution.modifier;
    };
    if (this.class === "mage") {
        this.hitDice = diceRoller.d6;
        this.magickaDice = diceRoller.d12;
        this.hitPoints = this.hitDice() + this.stats.Constitution.modifier;
        this.magickaPoints = this.magickaDice() + this.stats.Intelligence.modifier;
    };
    // the character's level tracks how powerful the character is
    // and increments along with other character properties upon level up
    this.level = 0;
};

module.exports = CharacterCreator;