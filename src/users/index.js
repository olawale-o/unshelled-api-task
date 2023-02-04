const router = require('express').Router();
const isTokenValid = require('../middleware/is-token-valid');

const controller = require('./controller');

router.post('/', controller.login);
router.put('/', isTokenValid, controller.update);

module.exports = router;
