const express = require('express');
require('dotenv').config();
require('./config/db');

const app = express();

app.use(express.json());

const port = 5000;

app.listen(port, () => {
  console.log('Express is running on the port', port);
});