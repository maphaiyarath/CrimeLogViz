// alert('Welcome to Michelle and Jacquie\'s data viz about crime at SMU!');

// test graphic
d3.select('#viz')
	.append('svg')
		.attr('width', 600)
		.attr('height', 400)
		.style('background', "#CC88CC")
	.append("rect")
		.attr('x', 200)
		.attr('y', 100)
		.attr('width', 200)
		.attr('height', 200)
		.style('fill', '#CB4321')
	d3.select('svg')
		.append("circle")
		.attr('cx', 200)
		.attr('cy', 200)
		.attr('r', 100)
		.style('fill', '#840042')

// test graphic w/ irrelevant data
// view array of objects in console
d3.csv("records.csv", function(d) {
	return {
		incident: d.Incident,
		report_number: +d["Report Number"],
		date_reported: d["Date Reported"],
		date_occurred: d["Date Occurred"],
		location: d.Location,
		disposition: d.Disposition
	};
}, function(data) {
	console.log(data);
	alert ('Data loaded!');
});

// irrelevant data
var bardata = [20, 30, 45, 15, 100, 80, 60, 30, 10, 5];

// variables for graphic
var height = 400,
	width = 600,
	barWidth = 50;
	barOffset = 5;

// color scale
var colors = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range(['#FFB832', '#C61C6F'])

// map data to canvas height
var yScale = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range([0, height])

// map data to canvas width
var xScale = d3.scale.ordinal()
	.domain(d3.range(0, bardata.length))
	.rangeBands([0, width])

// start drawing test graphic
d3.select('#viz2').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#C9D7D6')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', colors)
		.attr('width', xScale.rangeBand())
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('x', function(d, i) {
			return xScale(i);
		})
		.attr('y', function(d) {
			return height - yScale(d);
		})






// open -a 'Google Chrome' --args -allow-file-access-from-files










