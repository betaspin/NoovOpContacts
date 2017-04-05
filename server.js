const express = require ('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// API routes
const api = require('./server/routes/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static directory
app.use(express.static(path.join(__dirname, 'dist')));

// use the api routes
app.use('/api', api);

// use other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = '9484';
app.set('port', port);

// create http server
const server = http.createServer(app);
// start server
server.listen(port, () => console.log(`API running in localhost:${port}`));
