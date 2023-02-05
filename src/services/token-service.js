import jwt from 'jsonwebtoken';

const signToken = (credentials, secretKey, expiresIn) => new Promise((resolve, reject) => {
  const { sellerId } = credentials;
  const options = {
    expiresIn,
  };
  jwt.sign({ sellerId }, secretKey, options, (err, token) => {
    if (err) {
      reject(new Error('Forbidden'));
    } else {
      resolve(token);
    }
  });
});

const verifyToken = (token, secretKey) => new Promise((resolve, reject) => {
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      reject(new Error('Forbidden'));
    } else {
      resolve(decoded);
    }
  });
});
const newAccessToken = async (credentials) => signToken(credentials, 'ACCESS_TOKEN_SECRET', '1h');

const newfreshToken = async (credentials) => signToken(credentials, 'REFRESH_TOKEN_SECRET', 1000 * 60 * 60 * 24);

export default {
  newAccessToken,
  newfreshToken,
  verify: async (credentials) => verifyToken(credentials, 'ACCESS_TOKEN_SECRET'),
};
