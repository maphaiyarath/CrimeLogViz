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

// =============================================

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
	// alert ('Data loaded!');
});

// irrelevant data
// var bardata = [20, 30, 45, 15, 100, 80, 60, 30, 10, 5];
var bardata = [];
for (var i = 0; i < 50; i++) {
	bardata.push(Math.round(Math.random()*50) + 10)
}

bardata.sort(function compareNumbers(a, b) {
	return a - b;
});

// variables for graphic
var height = 400,
	width = 800,
	barWidth = 50;
	barOffset = 5;

// gradient color scale
// perhaps have legend where dif type of crime is dif color?
var colors = d3.scale.linear()
	.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
	.range(['#FFB832', '#C61C6F', '#268BD2', '#85992C'])

var tempColor;

// map data to canvas height
var yScale = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range([0, height])

// map data to canvas width
var xScale = d3.scale.ordinal()
	.domain(d3.range(0, bardata.length))
	.rangeBands([0, width])

var tooltip = d3.select('body').append('div')
	.style('position', 'absolute')
	.style('padding', '0 10px')
	.style('background', 'gray')
	.style ('opacity', .2)

// start drawing test graphic
var myChart = d3.select('#viz2').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', function(d, i) {
			return colors(i);
		})
		.attr('width', xScale.rangeBand())
		.attr('x', function(d, i) {
			return xScale(i);
		})
		.attr('height', 0)
		.attr('y', height)

	// user interactive
	.on('mouseover', function(d) {
		tooltip.transition()
			.style('opacity', .9)

		// show value of bar
		tooltip.html(d)
			.style('left', (d3.event.pageX - 20) + 'px')
			.style('top', (d3.event.pageY - 30) + 'px')

		tempColor = this.style.fill;
		d3.select(this)
			.style('opacity', .5)
			.style('fill', 'blue')
	})
	.on('mouseout', function(d) {
		d3.select(this)
			.style('opacity', 1)
			.style('fill', tempColor)
	})

// animation
myChart.transition()
	.attr('height', function(d) {
		return yScale(d);
	})
	.attr('y', function(d) {
		return height - yScale(d);
	})
	.delay(function(d, i) {
		return i * 10;
	})
	.duration(1000)
	.ease('elastic')

// y axis
var vGuideScale = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range([height, 0])

var vAxis = d3.svg.axis()
	.scale(vGuideScale)
	.orient('left')
	.ticks(10)

var vGuide = d3.select('svg').append('g')
	vAxis(vGuide)
	vGuide.attr('transform', 'translate(35, 0)')
	vGuide.selectAll('path')
		.style({fill: 'none', stroke: "#000"})
	vGuide.selectAll('line')
		.style({stroke: "#000"})

// x axis
var hAxis = d3.svg.axis()
	.scale(xScale)
	.orient('bottom')
	// 5 tick marks
	.tickValues(xScale.domain().filter(function(d, i) {
		return !(i % (bardata.length/5));
	}))

var hGuide = d3.select('svg').append('g')
	hAxis(hGuide)
	hGuide.attr('transform', 'translate(0, ' + (height - 30) + ')')
	hGuide.selectAll('path')
		.style({fill: 'none', stroke: "#000"})
	hGuide.selectAll('line')
		.style({stroke: "#000"})











// open -a 'Google Chrome' --args -allow-file-access-from-files










