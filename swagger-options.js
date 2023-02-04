const swaggerDefinition = require('./swagger-definition');

module.exports = {
  swaggerDefinition,
  apis: [
    './src/account/index.js',
    './src/orders/index.js',
  ],
};
