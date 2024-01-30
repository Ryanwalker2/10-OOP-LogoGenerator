const Circle = require('../circle.js');
const Triangle = require('../triangle.js');
const Square = require('../square.js');

describe('Create SVG file with ', () => {
    it('Should create a new SVG file with the shape of a circle.', () => {
        //bypass filepath requirement for testing purposes
        const circle = new Circle('RW', 'red', 'green', 'Circle');
        circle.setColor('blue');
        expect(circle.shape).toEqual(`<circle cx='150' cy='100' r='75' fill='blue' />`)
    })
    it('Should create a new SVG file with the shape of a Triangle.', () => {
        const triangle = new Triangle('RW', 'red', 'green', 'Triangle');
        triangle.setColor('blue');
        expect(triangle.shape).toEqual(`<polygon points='150,0 25,140 275,140' style='fill:blue' />`)
    })
    it('Should create a new SVG file with the shape of a Square.', () => {
        const square = new Square('RW', 'red', 'green', 'Square');
        square.setColor('blue');
        expect(square.shape).toEqual(`rect x='75' y='25' width='150' height='150' style='fill:blue' />`)
    })
})