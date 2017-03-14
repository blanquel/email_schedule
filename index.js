/**
 * 
 */
var app = require("http");
var schedule = require('node-schedule');
var test = require('../email_schedule/Controllers/EmailControllers');



 var rule0 = new schedule.RecurrenceRule();
 rule0.dayOfWeek = [0, 4]; // days 
 rule0.hour = 07 ; // hours
 rule0.minute = 59; // minute

 // schedule JOB
 var v0 = schedule.scheduleJob(rule0, function () {
     test.init();
 });

app.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello EveryOne Day;\n');
   
}).listen(process.env.PORT || 5000);
