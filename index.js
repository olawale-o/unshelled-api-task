import http from 'http';

import dbInstance from './src/database/index.js';

import dbConnection from './src/database/connection.js';
import app from './src/app.js';

const server = http.createServer(app);

const client = dbInstance('mongodb://localhost:27017/unshelled?retryWrites=true&w=majority');

dbConnection(client)
  .then((result) => {
    console.log(result);
    server.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  })
  .catch(console.log)
  .finally(() => client.close());

export default server;
