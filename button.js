var wifi = require('Wifi');
var http = require("http");

var password = require('./password.js');

E.on('init', function() {
  pinMode(NodeMCU.D7, 'input_pullup');
  wifi.restore();
});

wifi.stopAP();
wifi.setHostname('door-button');
wifi.on('connected', function(wifiEvt) {
  console.log('connected', wifiEvt);
  setWatch(
    function() {
      console.log('trigger');
      http.get('http://door.acsoc:37564')
    },
    NodeMCU.D7,
    { repeat: true, edge: 'falling', debounce: 80 });
});
wifi.connect('ACSOC', {password: password.ACSOC});
wifi.save();

save();
