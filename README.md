# time-on-screen (work in progress)
This is node.js app to show timer/time on screen 
- Connect to usb serial port
- Recieve time from timer via usb serial port
- Display time on screen.

## Setup
install serialport
cmd (run as an admin?)
cd time-on-screen (wherever it is))
npm install serialport
npm install express
npm install ws

## Run
```
node index.js
```
## List available port 
```
SerialPort.list().then(ports => {
  ports.forEach(function(port) {
    console.log(port);
    console.log(port.path);
    console.log(port.pnpId);
    console.log(port.manufacturer);
  });
});
```
