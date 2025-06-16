const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.get('/api/whoami', function(req, res) {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});
app.get('/', function(req, res) {
  res.send('Welcome to the Request Header Parser Microservice! Access /api/whoami to see your headers.');
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Your app is listening on port ${port}`);
  console.log(`Visit http://localhost:${port} in your browser.`);
  console.log(`Test the API: http://localhost:${port}/api/whoami`);
});