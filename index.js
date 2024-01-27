const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt('directory', require('inquirer-select-directory'));
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const questions = [{
    type: 'input',
    name: 'text',
    message: 'Please enter the text you would like in your logo. This can be up to 3 characters long.'
},{
    type: 'input',
    name: 'text-colour',
    message: 'What colour would you like the text in your logo to be? This can be a colour keyword or a hexidecimal number(#123456)'
},{
    type: 'input',
    name: 'shape-colour',
    message: 'What colour would you like your logo background to be? This can be a colour keyword or a hexidecimal number(#123456)'
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
    const filename = `logo.svg`;
    const saveLocation = data.filepath;
    let fileData = `<DOCTYPE html> \n <html> \n <body> \n <svg>`


    
});