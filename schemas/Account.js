const Account = {
  type: 'object',
  required: ['seller_id', 'seller_city', 'seller_state', 'seller_zip_code_prefix'],
  properties: {
    seller_id: {
      type: 'string',
      description: 'The seller id',
    },
    seller_city: {
      type: 'string',
      description: 'The seller city',
    },
    seller_state: {
      type: 'string',
      description: 'The seller state',
    },
    seller_zip_code_prefix: {
      type: 'string',
      description: 'The seller zip code prefix',
    },
  },
  example: {
    seller_id: 'seller_id',
    seller_city: 'ikoy',
    seller_state: 'lagos',
    seller_zip_code_prefix: '234',
  },
};

const AccountLoginRequest = {
  type: 'object',
  required: ['username', 'password'],
  properties: {
    username: {
      type: 'string',
      description: 'The seller id',
    },
    password: {
      type: 'string',
      description: 'The seller zip code prefix',
    },
  },
  example: {
    username: 'seller_id',
    password: '234',
  },
};

export {
  Account,
  AccountLoginRequest,
};
