const repository = require('./repository');

module.exports = {
  login: async (credentials) => {
    try {
      const seller = await repository.findOne({
        seller_id: credentials.username,
      });

      if (!seller) {
        throw new Error('Invalid credentials');
      }

      if (seller.seller_zip_code_prefix !== credentials.password) {
        throw new Error('Invalid credentials');
      }

      return seller;
    } catch (error) {
      throw new Error(error);
    }
  },
  update: async (credentials) => {
    try {
      const seller = await repository.findOneAndUpdate(
        {
          seller_id: credentials.seller_id,
        },
        {
          $set: {
            seller_city: credentials.seller_city,
            seller_state: credentials.seller_state,
          },
        },
        { returnDocument: 'after' },
      );

      return seller.value;
    } catch (error) {
      throw new Error(error);
    }
  },
};
