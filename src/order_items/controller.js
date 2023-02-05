import service from './service.js';

export default {
  orders: async (req, res) => {
    try {
      const { sellerId } = req;
      const { items_per_page: limit, page } = req.query;
      const orders = await service.orders({
        seller_id: sellerId, limit, offset: (page - 1) * limit,
      });
      const total = await service.countDocs({ seller_id: sellerId });
      res.status(200).json({
        data: orders,
        limit: 20,
        offset: 0,
        total,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  order: async (req, res) => {
    try {
      const order = await service.order({ order_item_id: req.params.id, seller_id: req.sellerId });
      res.status(200).json({
        data: order,
        limit: 20,
        offset: 0,
        total: order.length,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
