const dbClient = require('../database')('mongodb://localhost:27017/unshelled?retryWrites=true&w=majority');

const Seller = dbClient.db('unshelled').collection('sellers');

module.exports = {
  findOne: async (credentials) => Seller.findOne(credentials),
  findOneAndUpdate: async (filter, update, options) => (
    Seller.findOneAndUpdate(filter, update, options)
  ),
};
