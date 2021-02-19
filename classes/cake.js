class Cake {
    constructor() {
        this.bakedTime = 0
    }

    static ingredientsList = ['butter', 'sugar', 'egg', 'vanillaExtract', 'flour', 'milk'];
    static bakingTime = 45;
    static notReadyAdditionalBakingTime = 5;

    bake(minutes) {
        this.bakedTime += minutes
        return this
    }

    isReady() {
         return this.bakedTime >= Cake.bakingTime
    }
}

module.exports = Cake;