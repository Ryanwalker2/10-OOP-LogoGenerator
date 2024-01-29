const fs = require('fs');

class Logo {
    constructor(text, textcolour, shapecolour) {
        this.text = text;
        this.textcolour = textcolour;
        this.shapecolour = shapecolour;
    }
    render(saveLocation) {
     const filename = 'logo.svg';
     const shapeCode = 
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width='300' height='200'> \n ${this.shape}
    <text x='149' y='125' font-size='60' text-anchor='middle' fill='${this.textcolour}'>${this.text}</text>
    </svg>`

    fs.writeFile(filename, shapeCode, (err) => err ? console.log(err) : console.log(`Generated ${filename} has successfully been created and save to ${saveLocation}`))
    }
};

module.exports = Logo;