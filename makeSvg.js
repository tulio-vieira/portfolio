const TextToSVG = require('text-to-svg');
const fs = require('fs');

const textToSVG = TextToSVG.loadSync('./src/fonts/Vulf_Mono-Italic_web.ttf');
 
let attributes = {fill:"white", role:"img"};
let options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
 
let svg = textToSVG.getSVG('tulio', options);
fs.writeFileSync('./svgs/tulio.svg', svg);

attributes = {fill:"#d6ff00", role:"img"};
options = {x: 0, y: 80, fontSize: 72, anchor: 'top', attributes: attributes};
svg = textToSVG.getSVG('  Vieira', options);
fs.writeFileSync('./svgs/vieira.svg', svg);