const Logo = require('./shapes');

class Triangle extends Logo {
    constructor(text, textcolour, shapecolour) {
        super(text, textcolour, shapecolour);
        this.shape =  `<polygon points='150,0 25,140 275,140' style='fill:${shapecolour}' />`;
    }
    setColor(color) {
        this.shape = `<polygon points='150,0 25,140 275,140' style='fill:${color}' />`;
    }
};

module.exports = Triangle;