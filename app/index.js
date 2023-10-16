/*
 * This works together with canoe-freestyle-timer version 1.11 and higher.
 * This provides node.js web server which is listening a USB serial data port and sending the data through websocket to the client.
 * 16/10/2023
 */
const express = require('express');
const { SerialPort } = require('serialport');
const { Server } = require('ws');

let comport="";

if ( process.argv[2]  === undefined || process.argv[2] === null || process.argv[2] === '') {

    // console.log('Port infrmation missing.');

    SerialPort.list().then(ports => {
            ports.forEach(function(port) {
            console.log('Comport: '+port.path);
            comport=port.path;
        });
      });

} 
else {
    comport=process.argv[2];
    console.log('Port: '+ process.argv[2] );
}


// initialize the serialport. Note the fixed value for the baud rate - it must be the same in Arduino. //path: 'COM6'

const serialport = new SerialPort({
    path: 'COM6',
    baudRate: 38400,
}).setEncoding('utf8');

// initialize the webserver

const server = express()
  .use((req, res) => res.sendFile('/home.html', { root: __dirname }))
  .listen(3000, () => console.log(`Listening on http://localhost:${3000}`));
/*
const server = express();
const PORT = 3000;

server.use(function (req, res, next) {
 
    const options = {
        root: path.join(__dirname)
    };
 
    const fileName = '/home.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });
});

// Requests will never reach this route
server.get('/', function (req, res) {
    console.log("/user request called");
    res.send('Welcome to GeeksforGeeks');
});

server.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
*/

// initialize the websocket
const ws_server = new Server({ server });

// log actions to console
ws_server.on('connection', (ws) => {
    
    console.log('New browser connected!');
  
    ws.on('close', () => console.log('Browser has disconnected!'));
});

// read the serial port 
serialport.on('readable', function () {

    time = serialport.read();
    if ( time == "OK") {
        console.log('Timer started: '+time);    
    } else {
        console.log(time);
    }
    
});        

// send the time through websocket to the client 

setInterval(() => {
    ws_server.clients.forEach((client) => {

      client.send(time);

    });
}, 1000);
