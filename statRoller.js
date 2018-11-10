const DiceRoller = require("./DiceRoller.js");
var diceRoller = new DiceRoller();

function statRoller () {
    // rolls fours d6 and stores each result within an array for later use in generating stats for an RPG
    var diceArray = [],
        statDiceArray = [],
        score = 0,
        stat = {};
    for (let i = 0; i < 4; i++) {
        var d6 = diceRoller.d6();
        diceArray.push(d6);
    };
    // selects the minimum value from the diceArray
    var minDice = Math.min.apply(null, diceArray);
    // loop through the diceArray
    var minCount = 0;
    for (let i = 0; i < diceArray.length; i++) {
        // look for each number within diceArray that is not the minimum value
        if (diceArray[i] === minDice) {
            // keep track of how many dice are equal to the min
            minCount++;
        };
    };
    // if only one dice has the min value
    if (minCount === 1) {
        // find the position of the min within the array
        var minDicePos = diceArray.indexOf(minDice);
        // loop through the diceArray
        for (let i = 0; i < diceArray.length; i++) {
            // check for every element within diceArray that isn't minDice
            if (diceArray[i] != minDice) {
                // store each element in a new array
                statDiceArray.push(diceArray[i]);
            };
        };
    } else if (minCount > 1) {
        // find the position of the first min within the array
        var minDicePos = diceArray.indexOf(minDice);
        // loop through the diceArray
        for (let i = 0; i < diceArray.length; i++) {
            // check for every element within diceArray that isn't in the position of minDicePos
            if (i != minDicePos) {
                // store each element in a new array
                statDiceArray.push(diceArray[i]);
            };
        };
    };
    // loop through statDiceArray and add every number to generate a stat
    for (let i = 0; i < statDiceArray.length; i++) {
        score += statDiceArray[i];
    }
    // compute the modifier for the stat in addition to computing the stat itself
    // the modifier is the stat minus ten, divided by two, and rounded down
    var modifier = Math.floor((score - 10) / 2);
    // return the value of stat
    stat = {
        score: parseInt(score),
        modifier: parseInt(modifier)
    };
    return stat;
};

module.exports = statRoller;