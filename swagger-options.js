import swaggerDefinition from './swagger-definition.js';

export default {
  swaggerDefinition,
  apis: [
    './src/account/index.js',
    './src/orders/index.js',
  ],
};
