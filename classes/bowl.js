const Batter = require("./batter");

class Bowl {

    constructor() {
        this.ingredients = [];
    }

    putIn(ingredient) {
        this.ingredients.push(ingredient);
    }

    mix() {
        return new Batter(this.ingredients)
    }
}

module.exports = Bowl;