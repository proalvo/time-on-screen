# time-on-screen (work in progress)
This is node.js app to show timer/time on screen for live streaming of the competition. Source of time is github.com/proalvo/canoe-freestyle-timer.  
- Connect to usb serial port
- Recieve time from timer via usb serial port
- Display time on screen.
- Add display as browser source on OBS Studio or any toher straemin software.

This script has two essential files:
- inedx.js; this provides connection to the USB serialport and provides the tim through websocket connection to a client.
- home.html; this the client which display the time received by websocket connection. It has also styling of the page.

This has been tested with Windows 10, but nothing prevents it to posto Linux. Windoew is using port named as "COMx" and Linux propably somethin like "/tty/..."

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
## List available ports
Currently COM port is hard coded to the index.js which is not workign solution as the COM port can change when the timing system is connected to the computer. 
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
