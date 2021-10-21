const fs = require('fs');

//non-blocking asynchronous ways
// fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });
// console.log('Reading simple file...');

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
	if (err) {
		console.log(`Error 💥`);
		throw err;
	}
	fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
		fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
			const textout = `${data2}.${data3}: Created on ${new Date().toLocaleString(
				'en-US'
			)}`;
			fs.writeFile('./txt/final-1.txt', textout, 'utf-8', (err) => {
				console.log('File written! 😊');
			});
		});
	});
	console.log('Reading file..');
});

//write to a file
// const textOut = `This is what we know about avacado: ${textIn}. Created on ${new Date().toLocaleString(
// 	'en-US'
// )}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!\n');

// //read output file and display on <console className=""></console>
// const outputTxtIn = fs.readFileSync('./txt/output.txt', 'utf-8');
// console.log(outputTxtIn);
