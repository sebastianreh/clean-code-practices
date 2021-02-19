const Bowl = require("./bowl");
const Pan = require("./pan");

const INGREDIENT_NOT_FOUND = "ingredient was not found";

class Pantry {

    constructor(ingredients = []) {
        this.ingredients = ingredients;
        this.bowl = new Bowl();
        this.pan = new Pan();
    }

    getBowl() {
        return this.bowl;
    }

    getPan() {
        return this.pan;
    }

    getIngredient(ingredient) {
        if (!this.ingredients.includes(ingredient)) {
            throw new Error(`${ingredient}: ` + INGREDIENT_NOT_FOUND);
        }
        this.ingredients =  this.ingredients.filter(item => item !== ingredient)
        return ingredient;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}

module.exports = Pantry;