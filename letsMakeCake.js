const Kitchen = require("./classes/kitchenVersion1");

const CAKE_READY = 'Cake is ready!';
const CAKE_RAW = 'Cake is raw!';
const NO_CAKE = `There is no Cake!`;

const myKitchen = new Kitchen();
myKitchen.storeInPantry(['butter', 'sugar', 'egg', 'vanillaExtract', 'flour', 'milk']);
const cake = myKitchen.prepareCake();

if (cake !== null) {
   cake.isReady() ? printCake(CAKE_READY) : printCake(CAKE_RAW);
} else {
    console.log(NO_CAKE);
}

function printCake(message) {
    console.log(`${message} Baking Time: ${cake.bakedTime} minutes`);
}