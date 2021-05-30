const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

//commit changes
app.use(express.static(__dirname));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.htm'));
});

app.listen(PORT);
