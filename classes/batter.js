const Cake = require("./cake");
const { areEqualArrays } = require('../helper');

class Batter {
    constructor(ingredients) {
        this.ingredients = ingredients
        this.cookingTime = 0;
    }

    static cookingTimeThreshold = 40;
    
    bake(minutes) {
        this.cookingTime += minutes;
        if (this.isReady()) {
            if (areEqualArrays(this.ingredients, Cake.ingredientsList)) {
                let cake = new Cake();
                cake.bakedTime += this.cookingTime;
                return cake
            }
        }
        return this
    }

    isReady() {
        return this.cookingTime >= Batter.cookingTimeThreshold;
    }
}

module.exports = Batter;