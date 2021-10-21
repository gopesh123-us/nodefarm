const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); //note there is no callback paramter, as it is a synchoronous code.
console.log(textIn);

//write to a file
const textOut = `This is what we know about avacado: ${textIn}. Created on ${new Date().toLocaleString(
	'en-US'
)}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!\n');

//read output file and display on <console className=""></console>
const outputTxtIn = fs.readFileSync('./txt/output.txt', 'utf-8');
console.log(outputTxtIn);
