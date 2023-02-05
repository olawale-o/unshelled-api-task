import client from '../database/index.js';

const dbClient = client('mongodb://localhost:27017/unshelled?retryWrites=true&w=majority');

const Order = dbClient.db('unshelled').collection('orders');

export default {
  findAll: async (filter) => Order.aggregate([
    {
      $match: {
        seller_id: filter.seller_id,
      },
    },
    {
      $lookup: {
        from: 'products',
        localField: 'product_id',
        foreignField: 'product_id',
        as: 'product',
      },
    },
    {
      $sort: {
        price: 1,
        shipping_limit_date: 1,
      },
    },
    {
      $project: {
        product: { $arrayElemAt: ['$product', 0] },
        id: '$order_item_id',
        product_id: 1,
        price: 1,
        date: '$shipping_limit_date',
      },
    },
    {
      $project: {
        _id: 0,
        id: 1,
        product_id: 1,
        price: 1,
        date: 1,
        product_category_name: '$product.product_category_name',
      },
    },
    {
      $skip: parseInt(filter.offset, 10) || 0,
    },
    {
      $limit: parseInt(filter.limit, 10) || 10,
    },
  ]).toArray(),

  findById: async (filter) => Order.aggregate([
    {
      $match: {
        $and: [
          { seller_id: filter.seller_id },
          { order_item_id: parseInt(filter.order_item_id, 10) },
        ],
      },
    },
    {
      $limit: 10,
    },
  ]).toArray(),
  countDocs: async (filter) => Order.countDocuments(filter),
};
