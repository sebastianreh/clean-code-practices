const Oven = require("./oven");
const Pantry = require("./pantry");

class Kitchen {

    constructor() {
        this.oven = new Oven();
        this.pantry = new Pantry();
    }

    storeInPantry(ingredients){
        ingredients.forEach(i => this.pantry.addIngredient(i))
    }

    prepareCake() {
        let bowl = this.pantry.getBowl();
        let pan = this.pantry.getPan();
        let retrievedIngredients = [];
        const ingredientsList = ['butter', 'sugar', 'egg', 'vanillaExtract', 'flour', 'milk'];
        for (let i = 0; i < ingredientsList.length; i++) {
            try {
                retrievedIngredients.push(this.pantry.getIngredient(ingredientsList[i]))
            } catch(error) {
                console.error("You are missing some ingredient to prepare a cake")
                return null
            }
        }

        if (!this.oven.isEmpty()) {
            this.oven.empty()
        }

        this.oven.turnOn()
        retrievedIngredients.forEach(ingredient =>  {
            bowl.putIn(ingredient)
        })

        let batter = bowl.mix()
        pan.pourIn(batter)

        this.oven.putIn(pan)
        this.oven.bake(40)
        let cake = this.oven.takeContentOut()
        while (!cake.isReady()) {
            this.oven.putIn(cake)
            this.oven.bake(5)
            cake = this.oven.takeContentOut()
        }
        return cake
    }
}

module.exports = Kitchen;