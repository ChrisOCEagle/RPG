function DiceRoller() {
    // create a method that will generate a random number between one and two
    this.d2 = function() {
        var dice = Math.floor(Math.random() * 2) + 1;
        return dice.valueOf();
    };
    // create a method that will generate a random number between one and three
    this.d3 = function() {
        var dice = Math.floor(Math.random() * 3) + 1;
        return dice.valueOf();
    };
    // create a method that will generate a random number between one and four
    this.d4 = function() {
        var dice = Math.floor(Math.random() * 4) + 1;
        return dice.valueOf();
    };
    // create a method that will generate a random number between one and six
    this.d6 = function() {
        var dice = Math.floor(Math.random() * 6) + 1;
        return dice.valueOf();
    };
    // create a method that will generate a random number between one and eight
    this.d8 = function() {
        var dice = Math.floor(Math.random() * 8) + 1;
        return dice.valueOf();
    };
    // create a method that will generate a random number between one and ten
    this.d10 = function() {
        var dice = Math.floor(Math.random() * 10) + 1;
        return dice.valueOf();
    };
    // create a method that will generate a random number between one and twelve
    this.d12 = function() {
        var dice = Math.floor(Math.random() * 12) + 1;
        return dice.valueOf();
    };
    // create a method that will generate a random number between one and twenty
    this.d20 = function() {
        var dice = Math.floor(Math.random() * 20) + 1;
        return dice.valueOf();
    };
};

module.exports = DiceRoller;