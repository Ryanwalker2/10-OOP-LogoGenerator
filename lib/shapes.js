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
    `<svg width=300 height=200>${this.shape}<text x=149 y=125 font-size=80 text-anchor=middle fill=${this.textcolour}>${this.text}</text>`

    fs.writeFile(filename, JSON.stringify(shapeCode, null, '\t'), (err) => err ? console.log(err) : console.log(`Generated ${filename} has successfully been created and save to ${saveLocation}`))
    }
};

module.exports = Logo;