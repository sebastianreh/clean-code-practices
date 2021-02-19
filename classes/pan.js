class Pan {

    constructor() {
        this.content = null;
    }

    pourIn(content) {
        this.content = content;
    }

    bake(minutes){
        return this.content.bake(minutes)
    }
}

module.exports = Pan;