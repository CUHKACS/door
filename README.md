## ACS Door

### Prerequisites

- NodeJS / npm
- Driver for USB-Serial chip `CP2102`

### Hacking

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
