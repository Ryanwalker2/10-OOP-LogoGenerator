const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('validate-color').default;
inquirer.registerPrompt('directory', require('inquirer-select-directory'));
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const questions = [{
    type: 'input',
    name: 'text',
    message: 'Please enter the text you would like in your logo. This can be up to 3 characters long.',
    validate(answer) {
        if(answer.length > 3) {
            return "The text can only be a maximum length of 3 Characters.";
        } else {
            return true;
        }
    }

},{
    type: 'input',
    name: 'textcolour',
    message: 'What colour would you like the text in your logo to be? This can be a colour keyword or a hexidecimal number(#123456)',
    validate(answer) {
       const colorKey = validateColor(answer);
        if (colorKey == false) {
            // throw new Error('Invalid color or hexidecimal color code.');
            return 'Invalid color or hexidecimal color code.';
        } else {
            return true;
        }
    }
},{
    type: 'input',
    name: 'shapecolour',
    message: 'What colour would you like your logo background to be? This can be a colour keyword or a hexidecimal number(#123456)',
    validate(answer) {
        const colorKey = validateColor(answer);
         if (colorKey == false) {
             // throw new Error('Invalid color or hexidecimal color code.');
             return 'Invalid color or hexidecimal color code.';
         } else {
             return true;
         }
     }
},{
    type: 'list',
    name: 'shape',
    message: 'Now please select which shape your logo will be from the list below.',
    choices: ['Circle', 'Triangle', 'Square']
},{
    type: 'directory',
    name: 'filepath',
    message: 'Please select where you would like the file to be saved.',
    basePath: './',
    options: {
        displayFiles:false,
    }
}];

inquirer.prompt(questions)
.then((data) => {
    const {text, textcolour, shapecolour, shape, filepath} = data;
    
    switch (shape) {
        case 'Circle':
            const circle = new Circle(text, textcolour, shapecolour, shape, filepath); 
            circle.render(filepath);
            break;
        case 'Triangle':
            const triangle = new Triangle(text, textcolour, shapecolour, shape, filepath)
            triangle.render(filepath)
            break;
        case 'Square':
            const square = new Square(text, textcolour, shapecolour, shape, filepath);
            square.render(filepath);
            break;
    } 
});