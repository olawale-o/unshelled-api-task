const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const handleError = require('../common/error-handler');

const corsOption = {
  origin: 'http://localhost:3000',
  credential: true,
};

const app = express();

const swaggerOptions = require('../swagger-options');

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));

app.use('/api/v1/account', require('./account'));
app.use('/api/v1/order_items', require('./orders'));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use(async (err) => {
  console.log(err);
  // await handleError(err, res);
});

module.exports = app;
