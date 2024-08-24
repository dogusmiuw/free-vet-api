const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const cors = require('cors');

const recordController = require('./controllers/recordController');

app.use(parser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('slm');
});

app.use('/records', recordController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});