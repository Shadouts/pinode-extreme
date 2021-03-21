import * as express from 'express';

const compression = require('compression');

const server = express();
server.use(compression());

server.get('/', (req, res) => {
  res.sendFile('html/index.html', { root: __dirname });
});

server.get(/(\/block\/)[0-9a-f]{64}$/, (req, res) => {
  res.sendFile('html/index.html', { root: __dirname });
});

server.get('/peers', (req, res) => {
  res.sendFile('html/index.html', { root: __dirname });
});

server.get(/(\/transaction\/)[0-9a-f]{64}$/, (req, res) => {
  res.sendFile('html/index.html', { root: __dirname });
});

server.get('/app.js', (req, res) => {
  res.sendFile('app.js', { root: './dist' });
});

server.get('/main.css', (req, res) => {
  res.sendFile('CSS/main.css', { root: __dirname });
});

server.get('/image/favicon.png', (req, res) => {
  res.sendFile('image/favicon.png', { root: __dirname });
});

server.get('/favicon.png', (req, res) => {
  res.sendFile('image/favicon.png', { root: __dirname });
});

server.get('/pilogo-small.png', (req, res) => {
  res.sendFile('image/pilogo-small.png', { root: __dirname });
});

server.listen( 8000, () => console.log(`HTTP listening on port 8000`) );
