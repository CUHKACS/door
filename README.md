## ACS Door

### Hardware

- NodeMCU board x2
  - esp-12 module
  - esp8266 chip
- Servo motor
- Door bell button

### Firmware

Prerequisites:
- Driver for USB-Serial chip `CP2102`
- Python / pip
- Espruino firmware

Follow the official guide from espruino to flash the firmware using `esptool.py`.

### Hacking

Prerequisites:
- NodeJS / npm

Upload program:
```
$ git clone ... && cd ...
$ npm install
$ npm run upload-door
$ npm run upload-button
```

Debug:
```
$ npm run repl
```

NOTE: You may have to specify the serial device at the end of
upload or repl commands.
