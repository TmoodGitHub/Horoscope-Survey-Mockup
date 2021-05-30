const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

//commit changes
app.use(express.static(__dirname));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.htm'));
});

app.listen(PORT);
