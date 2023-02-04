const swaggerDefinition = require('./swagger-definition');

module.exports = {
  swaggerDefinition,
  apis: [
    './src/users/index.js',
    './src/orders/index.js',
  ],
};
