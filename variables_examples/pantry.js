class FirstPantry {

    constructor(products = {}) {
        this.cOil = products.cOil
        this.sgr = products.sgr
        this.eggs = products.eggs
        this.vanillaE = products.vanillaE
        this.flour = products.flour
        this.mlk = products.mlk
        this.rice = products.rice
        this.yerba = products.yerba
        this.spghti = products.spghti
    }

    getPantryCOil() {
        return this.cOil
    }
}

class BetterPantry {

    constructor(products = {}) {
        this.cookingOil = products.cookingOil
        this.sugar = products.sugar
        this.eggs = products.eggs
        this.vanillaExtract = products.vanillaExtract
        this.flour = products.flour
        this.milk = products.milk
        this.rice = products.rice
        this.yerbaMate = products.yerbaMate
        this.spaghetti = products.spaghetti
    }

    getPantryCookingOil() {
        return this.cookingOil
    }
}

class EvenBetterPantry {

    constructor(products = {}) {
        this.oil = products.oil
        this.sugar = products.sugar
        this.eggs = products.eggs
        this.vanillaExtract = products.vanillaExtract
        this.flour = products.flour
        this.milk = products.milk
        this.rice = products.rice
        this.yerbaMate = products.yerbaMate
        this.spaghetti = products.spaghetti
    }

    getOil() {
        return this.oil
    }
}

/*
If you won't use this...    and use this instead
Pantry.getPantryRice() ---> Pantry.getRice()

Why would you use this?     Use this instead
User.getUserName()     ---> User.getName()
 */