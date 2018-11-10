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
        var hitDice = diceRoller.d12;
        var hitPoints = hitDice() + this.stats.Constitution.modifier;
    };
    if (this.class === "rogue") {
        var hitDice = diceRoller.d8;
        var hitPoints = hitDice() + this.stats.Constitution.modifier;
    };
    if (this.class === "mage") {
        var hitDice = diceRoller.d6;
        var hitPoints = hitDice() + this.stats.Constitution.modifier;
    };
    this.hitDice = hitDice;
    // ---------------------------------------------
    this.hitPoints = hitPoints;
    // ---------------------------------------------
    // the character's level tracks how powerful the character is
    // and increments along with other character properties upon level up
    this.level = 0;
    this.levelUp = function() {
        console.log("Level Up!");
        this.level++;
        var choices = Object.entries(this.stats);
        var hitDice = this.hitDice;
        var hitPoints = this.hitPoints;
        inquirer.prompt(
            [
                {
                    type: "list",
                    name: "stat-1",
                    message: "What stat would you like to increase?",
                    choices: Object.keys(this.stats)
                },
                {
                    type: "list",
                    name: "stat-2",
                    message: "What stat would you like to increase?",
                    choices: Object.keys(this.stats)
                }
            ]
        ).then(function(answers) {
            for (let i = 0; i < choices.length; i++) {
                if (answers['stat-1'] === answers['stat-2']) {
                    if (choices[i][0] === answers['stat-1']) {
                        choices[i][1].score += 2;
                        choices[i][1].modifier = Math.floor((choices[i][1].score - 10) / 2);
                    };
                } else if (choices[i][0] === answers['stat-1'] || choices[i][0] === answers['stat-2']) {
                    choices[i][1].score++;
                    choices[i][1].modifier = Math.floor((choices[i][1].score - 10) / 2);
                }
                this.stats = choices
            };
            for (let i = 0; i < this.stats.length; i++) {
                if (this.stats[i][0] === "Constitution") {
                    hitPoints += hitDice() + this.stats[i][1].modifier;
                    // --------------------------------------------------
                    this.hitPoints = hitPoints;
                    // --------------------------------------------------
                };
            };
        });   
    };
};

module.exports = CharacterCreator;