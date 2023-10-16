# time-on-screen (work in progress)
This is node.js app to show timer/time on screen for live streaming of the competition. Source of time is github.com/proalvo/canoe-freestyle-timer.  
Workflow of software:
- Connect the software to a usb serial port
- Recieve time from timer via the usb serial port
- Display time on web browser.
- Add display as browser source on OBS Studio or any other streaming software.

This script has two essential files:
- inedx.js; this provides connection to the USB serialport and provides the tim through websocket connection to a client.
- home.html; this the client which display the time received by websocket connection. It has also styling of the page.

This has been tested with Windows 10, but nothing prevents it to use with Linux. Windows is using port named as "COMx" and Linux propably something like "/tty/..."

## Setup
install serialport
cmd (run as an admin?)
cd time-on-screen (wherever it is))
npm install serialport
npm install express
npm install ws

## Run
```
node index.js <port>
```
## List available ports
Currently COM port is hard coded to the index.js which is not working solution as the COM port can change when the timing system is reconnected to the computer. 
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
