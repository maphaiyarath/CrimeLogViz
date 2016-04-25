
alert("This is my javascript file");

var crime = new CrimeLog("Sally", "1", "2/3", "1100", "Moody", "closed");
var crimeLogs = [];
var parser = new Parser(); 
parser.parse();

function CrimeLog(type, reportNumber, date, time, location, status) {
	this.type = type;
	this.reportNumber = +reportNumber;
	this.date = +date;
	this.time = +time; 
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

function Parser() {
	url = "http://www.smu.edu/BusinessFinance/Police/CrimeLog/SMU%20-%20Main%20Campus/";
	document = "records.csv"; 
};

Parser.prototype.sortChronological = function() {
	
};

Parser.prototype.getNumOfRows = function() {

};

Parser.prototype.run = function() {
	this.scrapeTable();
};

Parser.prototype.parse = function() {
	d3.csv(this.document)
		.row(function(d) { return {key: d.key, value: d.value}; })
		.get(function(error,rows) {console.log(rows); });
};
