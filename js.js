function saveAsPDF(argument) {
	const svgElement = document.getElementById('svg');
	const width = 300,
		height = 200;

	// create a new jsPDF instance
	const pdf = new jsPDF('l', 'pt', [width, height]);

	// render the svg element
	svg2pdf(svgElement, pdf, {
		xOffset: 0,
		yOffset: 0,
		scale: 1
	});

	// get the data URI
	const uri = pdf.output('datauristring');

	// or simply safe the created pdf
	pdf.save('myPDF.pdf');
}