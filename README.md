# time-on-screen
Show timer/time on screen 
Theses are just note for myself at momen

## Setup
install serialport
cmd (run as an administtrator?)
cd time-on-screen (wherever it is))
npm install serialport

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
