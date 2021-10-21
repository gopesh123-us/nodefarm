const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

///FILES - FUNCTIONAL CODE BELOW WORKS! JUST UNCOMMENT///////////////////////////////
/* fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
	if (err) console.log(`Error 💥`);
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
}); */

///SERVER//////////////////////////////////////////////
/* IMPORT http module to get networking capabilities
the createServer function take a callback function that uses two prarams req and res
when req is received, it works!
createServer waits */

const tempOverview = fs.readFileSync(
	`${__dirname}/templates/template-overview.html`,
	'utf-8'
);
const tempCard = fs.readFileSync(
	`${__dirname}/templates/template-card.html`,
	'utf-8'
);
const tempProduct = fs.readFileSync(
	`${__dirname}/templates/template-product.html`,
	'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
	//console.log(url);
	//console.log(url.parse(req.url, true));
	const { query, pathname } = url.parse(req.url, true);
	//const pathname = req.url;

	//overview page
	if (pathname === '/' || pathname === '/overview') {
		res.writeHead(200, { 'Content-type': 'text/html' });
		const cardHtml = dataObj
			.map((el) => replaceTemplate(tempCard, el))
			.join('');
		const finalOutputHtml = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);
		res.end(finalOutputHtml);

		//product page
	} else if (pathname === '/product') {
		const product = dataObj[query.id];
		res.writeHead(200, { 'Content-type': 'text/html' });
		const productOutputHtml = replaceTemplate(tempProduct, product);
		res.end(productOutputHtml);

		//api
	} else if (pathname === '/api') {
		res.writeHead(200, { 'Content-type': 'application/json' });
		res.end(data);

		//not found
	} else {
		//write headers first
		res.writeHead(404, {
			'Content-type': 'text/html',
			'my-own-header': 'Hello-World',
		});
		//this should be the last statement
		res.end('<h1>Page not found</h1>');
	}
});

server.listen(8000, '127.0.0.1', () => {
	console.log('listening on port 8000');
});
