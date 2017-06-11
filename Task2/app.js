var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("Connected");
})
server.listen(3000, "116.62.120.155" {
    console.log('Listening at: http://116.62.120.155');
});



// create a mew board 
var five = require("johnny-five");
var led;
var motion;
var board = new five.Board();
board.on("ready", function() {
    // create a new 'LED' instance
    led = new five.Led(13);
    // create a new `motion` hardware instance
    motion = new five.Motion(7);
});



// create socket
var socket = require('socket.io').listen(server);
socket.on('connection', function(socket) {
    // if client requests to turn motion sensor
    socket.on("turn motion sensor on", function() {
        console.log('motion sensor on');
        
        //create variable to determine motion duration
        var stime,
        etime,
        duration

        // "calibrated" occurs once, at the beginning of a session
        motion.on("calibrated", function() {
            console.log("calibrated");
        });
            
        motion.on('motionstart', function() {
            // record time of motion detected
            console.log('motion detected')
            stime = Date.now();
        });

        motion.on('motionend', function() {
            // calculate motion duration
            console.log('motion ended')
            etime = Date.now();
            duration = etime - stime;
        // send message to client based on duration of motion detected
            if (duration >= 500) {
                socket.emit("long motion");
                console.log('long motion detected');
            } else {
                socket.emit("short motion");
                console.log('short motion detected');
            };
        });

    });
    socket.on("turn motion sensor off", function() {
            // turn motion off
            console.log('motion sensor off');
    });
        
    // if client requests to turn LED
    socket.on("turn LED on", function() {
        led.on();
        console.log('LED on');
    });
    socket.on("turn LED off", function() {
        led.off();
        console.log('LED off');
    });
});
