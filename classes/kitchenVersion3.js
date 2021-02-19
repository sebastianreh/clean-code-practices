const Oven = require("./oven");
const Pantry = require("./pantry");
const Cake = require("./cake");
const {areEqualArrays} = require('./../helper');

const INGREDIENT_MISSING_ERROR = "You are missing some ingredient to prepare a cake";
const CAKE_NOT_READY_YET_WARNING = `Cake is not ready yet. Let's bake it some more minutes`;

class Kitchen {

    constructor() {
        this.oven = new Oven();
        this.pantry = new Pantry();
    }

    storeInPantry(ingredients){
        ingredients.forEach(i => this.pantry.addIngredient(i));
    }

    prepareCake() {
        const bowl = this.pantry.getBowl();
        const pan = this.pantry.getPan();
        let retrievedIngredients = [];
        const ingredientsList = Cake.ingredientsList;

        //Gather the ingredients to prepare the Cake
        //returns null if there is not enough ingredients
        for (let i = 0; i < ingredientsList.length; i++) {
            try {
                retrievedIngredients.push(this.pantry.getIngredient(ingredientsList[i]));
            } catch(error) {
                console.error(INGREDIENT_MISSING_ERROR);
            }
        }

        if (!areEqualArrays(retrievedIngredients, ingredientsList)) {
            return null;
        }


        // Prepare the oven to bake the cake
        if (!this.oven.isEmpty()) {
            this.oven.empty();
        }
        this.oven.turnOn();

        //Mix the ingredients and form the batter
        retrievedIngredients.forEach(ingredient =>  {
            bowl.putIn(ingredient);
        })
        let batter = bowl.mix();
        pan.pourIn(batter);

        //Bake the cake
        this.oven.putIn(pan);
        this.oven.bake(Cake.bakingTime);
        let cake = this.oven.takeContentOut();
        while (!cake.isReady()) {
            console.warn(CAKE_NOT_READY_YET_WARNING);
            this.oven.putIn(cake);
            this.oven.bake(Cake.notReadyAdditionalBakingTime);
            cake = this.oven.takeContentOut();
        }
        return cake;
    }
}

module.exports = Kitchen;