module.exports = (htmlFile, product) => {
	let outputHtml = htmlFile;
	outputHtml = outputHtml.replace(/{%ID%}/g, product.id);
	outputHtml = outputHtml.replace(/{%PRODUCTNAME%}/g, product.productName);
	outputHtml = outputHtml.replace(/{%IMAGE%}/g, product.image);
	outputHtml = outputHtml.replace(/{%FROM%}/g, product.from);
	outputHtml = outputHtml.replace(/{%NUTRIENTS%}/g, product.nutrients);
	outputHtml = outputHtml.replace(/{%QUANTITY%}/g, product.quantity);
	outputHtml = outputHtml.replace(/{%PRICE%}/g, product.price);
	outputHtml = outputHtml.replace(/{%DESCRIPTION%}/g, product.description);
	if (!product.organic) {
		outputHtml = outputHtml.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
	}

	return outputHtml;
};
