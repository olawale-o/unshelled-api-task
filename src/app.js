const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const handleError = require('../common/error-handler');

// const whitelist = ['http://localhost:3000', 'http://localhost:8080'];

const corsOption = {
  // origin(origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();

const swaggerOptions = require('../swagger-options');

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/v1/account', require('./account'));
app.use('/api/v1/order_items', require('./order_items'));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use(async (err) => {
  console.log(err);
  // await handleError(err, res);
});

module.exports = app;
