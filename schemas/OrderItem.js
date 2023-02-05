const OrderItem = {
  type: 'object',
  required: ['id', 'date', 'price', 'product_id', 'product_category'],
  properties: {
    id: {
      type: 'string',
      description: 'The order item id',
    },
    date: {
      type: 'string',
      description: 'The shipping limit date',
    },
    price: {
      type: 'string',
      description: 'The price',
    },
    product_id: {
      type: 'string',
      description: 'The product id',
    },
    product_category: {
      type: 'string',
      description: 'The product category name',
    },
  },
  example: {
    id: 'order_item_id',
    date: 'shipping_limit_date',
    price: 'price',
    product_id: 'product_id',
    product_category: 'product_category_name',
  },
};

export default OrderItem;
