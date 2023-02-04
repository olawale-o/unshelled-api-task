const service = require('./service');
const tokenService = require('../services/token-service');

module.exports = {
  login: async (req, res) => {
    const { cookies } = req;
    const { sellerId, sellerZipCodePrefix } = req.body;
    try {
      const seller = await service.login({ sellerId, sellerZipCodePrefix });
      const accessToken = await tokenService.newAccessToken({ sellerId });
      if (cookies?.jwt) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
      }
      const refreshToken = await tokenService.newfreshToken({ sellerId });
      res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true });
      res.status(200).json({
        accessToken,
        seller,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    const { sellerId } = req;
    const { sellerCity, sellerState } = req.body;
    try {
      const seller = await service.update({
        seller_id: sellerId,
        seller_city: sellerCity,
        seller_state: sellerState,
      });
      res.status(200).json({ seller });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
