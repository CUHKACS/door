var servo = require('servo').connect(D13);
var wifi = require('Wifi');
var http = require("http");

var password = require('./password.js');

var doorOpening = false;
function openDoor(req, res) {
  if(!doorOpening) {
    console.log('open');
    doorOpening = true;
    servo.move(0.4,800);
    setTimeout(function() {
      servo.move(0,800);
      doorOpening = false;
    }, 500);
  }
  res.writeHead(200);
  res.end('Door Opened');
}

function onInit() {
  servo.move(0,1000);
  wifi.stopAP();
  wifi.connect('ACSOC', {password: password.ACSOC}, _ => {
    console.log('wifi connected');
    http.createServer(openDoor).listen(37564);
  });
}

save();

