const router = require('express').Router();
const controller = require('./controller');
const isTokenValid = require('../middleware/is-token-valid');

/**
* @swagger
*   /order_items:
*     get:
*       summary: Get all orders for a seller
*       tags: [Order Items]
*       security:
*         - bearerAuth: []
*       parameters:
*         - in: query
*           name: items_per_page
*           schema:
*             type: integer
*           description: The number of items per page
*         - in: query
*           name: page
*           schema:
*             type: integer
*           description: The page number
*       responses:
*         200:
*           description: Success
*           content:
*             application/json:
*               schema:
*                 items:
*                   $ref: '#/components/schemas/OrderItem'
*         500:
*           description: Internal server error
*/
router.get('/', isTokenValid, controller.orders);

/**
* @swagger
*   /order_items/{id}:
*     get:
*       summary: Get all orders for a seller
*       tags: [Order Items]
*       security:
*         - bearerAuth: []
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           description: The order item id
*       responses:
*         200:
*           description: Success
*           content:
*             application/json:
*               schema:
*                 items:
*                   $ref: '#/components/schemas/OrderItem'
*         500:
*           description: Internal server error
*/
router.get('/:id', isTokenValid, controller.order);

module.exports = router;
