import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../swagger-options.js';
import account from './account/index.js';
import orderItems from './order_items/index.js';

const corsOption = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/v1/account', account);
app.use('/api/v1/order_items', orderItems);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use(async (err) => {
  console.log(err);
  // await handleError(err, res);
});

// module.exports = app;

export default app;
