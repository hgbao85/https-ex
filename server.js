// const fs = require('fs');
// const path = require('path');
// const https = require('https')

// const options = {
// key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
// cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt'))
// }

// https.createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end('Hello, world!');
// }).listen(443, () => {
//     console.log('Server is running on https://localhost:443');
// });


const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const options = {
key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt'))
};
const httpsServer = https.createServer(options, (req, res) => {
res.writeHead(200);
res.end('Hello, world!');
});
 
const httpServer = http.createServer((req, res) => {
const host = req.headers.host.split(':')[0]; // Get hostname without port number
res.writeHead(301, { Location: `https://${host}:443${req.url}` }); //https://${req.headers.host}${req.url}
res.end();
});
 
httpServer.listen(3000);
httpsServer.listen(443);
