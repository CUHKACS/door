var wifi = require('Wifi');
var http = require("http");

var password = require('./password.js');

function buttonPress() {
  console.log('trigger');
  http.get('http://door.acsoc:37564');
}

wifi.connect(
  'ACSOC', {password: password.ACSOC},
  function(wifiIP) {
    console.log('connected', wifiIP);
    pinMode(NodeMCU.D7, 'input_pullup');
    setWatch(
      buttonPress, NodeMCU.D7,
      { repeat: true, edge: 'falling', debounce: 80 }
    );
  }
);

wifi.save();

