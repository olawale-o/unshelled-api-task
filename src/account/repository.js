import client from '../database/index.js';

const dbClient = client('mongodb://localhost:27017/unshelled?retryWrites=true&w=majority');

const Seller = dbClient.db('unshelled').collection('sellers');

export default {
  findOne: async (credentials) => Seller.findOne(credentials),
  findOneAndUpdate: async (filter, update, options) => (
    Seller.findOneAndUpdate(filter, update, options)
  ),
};
