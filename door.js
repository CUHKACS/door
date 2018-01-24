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

wifi.connect(
  'ACSOC', {password: password.ACSOC},
  function(wifiIP) {
    console.log('connected', wifiIP);
    servo.move(0,1000);
    http.createServer(openDoor).listen(37564);
  }
);

wifi.save()
