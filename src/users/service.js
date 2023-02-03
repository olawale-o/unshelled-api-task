const repository = require('./repository');

module.exports = {
  login: async (credentials) => {
    try {
      const seller = await repository.findOne({
        seller_id: credentials.sellerId,
      });

      if (!seller) {
        throw new Error('Invalid credentials');
      }

      if (seller.seller_zip_code_prefix !== credentials.sellerZipCodePrefix) {
        throw new Error('Invalid credentials');
      }

      return seller;
    } catch (error) {
      throw new Error(error);
    }
  },
};
