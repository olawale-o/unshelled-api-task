const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const handleError = require('../common/error-handler');

const corsOption = {
  origin: 'http://localhost:3000',
  credential: true,
};

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));

app.use('/api/v1/account', require('./users'));
app.use('/api/v1/order_items', require('./orders'));

app.use(async (err) => {
  console.log(err);
  // await handleError(err, res);
});

module.exports = app;
