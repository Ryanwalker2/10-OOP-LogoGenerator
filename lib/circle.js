const Logo = require('./shapes');

class Circle extends Logo {
    constructor(text, textcolour, shapecolour) {
        super(text, textcolour, shapecolour);
        this.shape = `<circle cx=150 cy=100 r=75 fill=${this.shapecolour} />`;
    }
};

module.exports = Circle;