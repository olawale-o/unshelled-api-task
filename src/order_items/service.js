import repository from './repository.js';

export default {
  orders: async (filter) => {
    try {
      const orders = await repository.findAll(filter);
      return orders;
    } catch (error) {
      throw new Error(error);
    }
  },
  order: async (filter) => {
    try {
      const order = await repository.findById(filter);
      return order;
    } catch (error) {
      throw new Error(error);
    }
  },
  countDocs: async (filter) => repository.countDocs(filter),
};
