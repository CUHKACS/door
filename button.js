var wifi = require('Wifi');
var http = require("http");

var password = require('./password.js');

function buttonPress() {
  console.log('trigger');
  http.get('http://door.acsoc:37564');
}

function onInit() {
  pinMode(NodeMCU.D7, 'input_pullup');
  wifi.stopAP();
  wifi.connect('ACSOC', {password: password.ACSOC}, _ => {
    console.log('wifi connected');
    setWatch(
      buttonPress, NodeMCU.D7,
      { repeat: true, edge: 'falling', debounce: 80 }
    );
  });
}

save();
