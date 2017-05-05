var wifi = require('Wifi');
var http = require("http");

var password = require('./password.js');

E.on('init', function() {
  pinMode(D13, 'input_pullup');
  wifi.restore();
});

wifi.stopAP();
wifi.setHostname('door-button');
wifi.on('connected', function() {
  setWatch(function() {
    console.log('trigger');
    http.get('http://door.acsoc:37564');
  }, D13, { repeat: true, edge: 'falling', debounce: 80 });
});
wifi.connect('ACSOC', {password: password.ACSOC});
wifi.save();

save();
