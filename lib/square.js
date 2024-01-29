const Logo = require('./shapes');

class Square extends Logo {
    constructor(text, textcolour, shapecolour) {
        super(text, textcolour, shapecolour);
        this.shape = `<rect x='75' y='25' width='150' height='150' style='fill:${this.shapecolour}' />`
    }
    setColor(color) {
        this.shape = `rect x='75' y='25' width='150' height='150' style='fill:${color}' />`;
    }
};

module.exports = Square;