const {
  Account,
  AccountLoginRequest,
} = require('./schemas');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Unshelled task',
    version: '1.0.0',
    contact: {
      name: 'API Support',
      url: 'localhost:5000/api/v1/',
      email: 'omoogunolawale@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:{port}/api/{basePath}',
      description: 'Development API Server',
      variables: {
        basePath: {
          default: 'v1',
        },
        port: {
          default: '5000',
        },
      },
    },
  ],

  components: {
    schemas: {
      Account,
      AccountLoginRequest,
    },
  },
};
