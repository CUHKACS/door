var servo = require('servo').connect(D13);
var wifi = require('Wifi');
var http = require("http");

var password = require('./password.js');

var doorMutex = false;
function openDoor() {
  if(!doorMutex) {
    doorMutex = true;
    servo.move(0.4,800);
    setTimeout(function() {
      servo.move(0,800);
      doorMutex = false;
    }, 500);
  }
}

wifi.stopAP();
wifi.setHostname('door');
wifi.on('connected', function() {
  http.createServer(function (req, res) {
    openDoor();
    res.writeHead(200);
    res.end('');
  }).listen(37564);
});
wifi.connect('ACSOC', {password: password.ACSOC});
wifi.save();

E.on('init', function() {
  servo.move(0,1000);
  wifi.restore();
});

save();
