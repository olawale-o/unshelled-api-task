const service = require('./service');

module.exports = {
  login: async (req, res) => {
    const { sellerId, sellerZipCodePrefix } = req.body;
    try {
      const seller = await service.login({ sellerId, sellerZipCodePrefix });
      res.status(200).json(seller);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
