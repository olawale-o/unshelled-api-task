import service from './service.js';
import tokenService from '../services/token-service.js';

export default {
  login: async (req, res) => {
    const { cookies } = req;
    const { username, password } = req.body;
    try {
      const seller = await service.login({ username, password: parseInt(password, 10) });
      const accessToken = await tokenService.newAccessToken({ sellerId: username });
      if (cookies?.jwt) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
      }
      const refreshToken = await tokenService.newfreshToken({ sellerId: username });
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
  refreshToken: async (req, res, next) => {
    const { cookies } = req;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    try {
      const payload = await tokenService.verifyRefreshToken(refreshToken);
      if (!payload) {
        return res.sendStatus(403);
      }
      const seller = await service.findById({ seller_id: payload.sellerId });
      const accessToken = await tokenService.newAccessToken({ sellerId: payload.sellerId });
      return res.status(200).json({
        accessToken,
        seller,
      });
    } catch (error) {
      return next(error);
    }
  },
};
