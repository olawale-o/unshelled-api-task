import swaggerDefinition from './swagger-definition.js';

export default {
  swaggerDefinition,
  apis: [
    './src/account/index.js',
    './src/order_items/index.js',
  ],
};
