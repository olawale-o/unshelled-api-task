const router = require('express').Router();
const isTokenValid = require('../middleware/is-token-valid');

const controller = require('./controller');

/**
* @swagger
*   /account:
*     post:
*       summary: Authenticate user
*       tags: [Account]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/AccountLoginRequest'
*       responses:
*         200:
*           description: Success
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Account'
*         500:
*           description: Internal server error
*/
router.post('/', controller.login);

/**
* @swagger
*   /account:
*     put:
*       summary: Update user
*       tags: [Account]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 sellerCity:
*                   type: string
*                   description: The seller city
*                 sellerState:
*                   type: string
*                   description: The seller state
*       responses:
*         200:
*           description: Success
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Account'
*         500:
*           description: Internal server error
*/
router.put('/', isTokenValid, controller.update);

module.exports = router;
