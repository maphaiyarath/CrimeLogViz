

function CrimeLog(type, reportNumber, date, time, location, status) {
	this.type = type;
	this.reportNumber = +reportNumber;
	this.date = +date;
	this.time = time; 
	this.location = location;
	this.status = status;

};

CrimeLog.prototype.getType = function() {
	return this.type; 
};

CrimeLog.prototype.getDate = function() {
	return this.date; 
};

CrimeLog.prototype.getLocaton = function() {
	return this.location;
};

CrimeLog.prototype.getTime = function() {
	return this.time;
};

CrimeLog.prototype.getStatus = function() {
	return this.status;
};

CrimeLog.prototype.getReportNumber = function() {
	return this.reportNumber; 
};

CrimeLog.prototype.print = function() {
	console.log(this.type, this.date, this.time, this.location);
}

function Parser() {
	this.url = "http://www.smu.edu/BusinessFinance/Police/CrimeLog/SMU%20-%20Main%20Campus/";
	this.document = "records.csv"; 
};

Parser.prototype.sortChronological = function() {
	
};

Parser.prototype.getNumOfRows = function() {

};

Parser.prototype.run = function() {
	this.scrapeTable();
};


Parser.prototype.cleanIncident = function(incident) {
	var numOfIncidents = 0;
	var startIndex = 0; 
	for(var i = 0; i < incident.length; i++){
		if(incident.charAt(i) == ',') numOfIncidents++;
	}
	var incidents = [];
	if(numOfIncidents>0) {
		for(var i = 0; i < numOfIncidents; i++) {
			endIndex = incident.indexOf(',', startIndex); 
			if(endIndex == -1) endIndex=temp.lenth();
			incidents[i] = incident.substring(startInde, endIndex);
			startIndex = endIndex;
		}
	}
	return incidents; 
};

Parser.prototype.cleanDate = function(date) {
	return date;  
};

Parser.prototype.cleanReportNumber = function(id) {
	return id;
};

Parser.prototype.cleanLocation = function(location) {
	return location; 
};

Parser.prototype.parse = function() {
	var parser = this;
	d3.csv(this.document, function(data) { 
		numOfCrimeLogs++;
		data.forEach(function(d) {
			d.incident = parser.cleanIncident(d.incident);
			//var incident = this.cleanIncident(d.incident);
			//var date = this.cleanDate(d.date);
		});
		console.log(data);
		//return {key: d.key, value: d.value}; 
	});
};

var crime = new CrimeLog("Sally", "1", "2/3", 1100, "Moody", "closed");
var crimeLogs = [];
var parser = new Parser(); 
var numOfCrimeLogs = 0; 
parser.parse();

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
		.append('circle')
		.attr('cx', 200)
		.attr('cy', 200)
		.attr('r', 100)
		.style('fill', '#840042')

/*
var chart = d3.select('.chart')
	.attr({
		'width': totalWidth;
		'height': totalHeight;
	})
;
var bar = chart.append('g');
bar.append('rect')
	.attr('width', 20);
	.attr('height', crime.time/10);
*/
