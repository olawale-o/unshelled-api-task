const tokenService = require('../services/token-service');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Unauthorized' });
    const token = req.headers.authorization.split(' ')[1];
    const payload = await tokenService.verify(token);
    req.sellerId = payload.sellerId;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
