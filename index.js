const http = require('http');
const client = require('./src/database')('mongodb://localhost:27017/unshelled?retryWrites=true&w=majority');
const dbConnection = require('./src/database/connection');
const app = require('./src/app');

const server = http.createServer(app);

dbConnection(client)
  .then((result) => {
    console.log(result);
    server.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  })
  .catch(console.log)
  .finally(() => client.close());

module.exports = server;
