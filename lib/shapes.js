class Logo {
    constructor(text, textcolour, shapecolour) {
        this.text = text;
        this.textcolour = textcolour;
        this.shapecolour = shapecolour;
    }
    createLogo(shape,filename,saveLocation) {
        

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log(`Generated ${filename} has successfully been created and save to ${saveLocation}`))
    }
};

module.exports = Logo;