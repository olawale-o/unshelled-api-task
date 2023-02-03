const { MongoClient } = require('mongodb');

module.exports = function dbInstance(uri) {
  return new MongoClient(uri);
};
