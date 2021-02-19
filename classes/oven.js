class Oven {

    constructor() {
        this.isOn = false;
        this.content = null;
    }

    empty() {
        this.content = null;
    }

    isEmpty() {
        return this.content === null;
    }

    turnOn() {
        this.isOn = true;
    }

    putIn(something) {
        this.content = something;
    }

    takeContentOut() {
        const content = this.content;
        this.content = null;
        return content;
    }

    bake(minutes) {
        this.content = this.content.bake(minutes);
    }


    prepare() {
        if (!this.isEmpty()) {
            this.empty()
        }
        this.turnOn()
    }
}

module.exports = Oven;