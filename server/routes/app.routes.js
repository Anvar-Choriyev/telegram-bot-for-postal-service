const express = require("express")

const router = express.Router()


/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *   tags: [MainData]
 *   requestBody:
 *      required: true
 *      content:
 *         application/json:
 *            schema:
 *                type: object
 *                properties:
 *                   username:
 *                      type: string
 *                      default: myusername
 *                   password:
 *                      type: string
 *                      default: 19981998
 *   responses:
 *      200:
 *       description: Success
 * 
 */

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *   description: Get by id
 *   responses:
 *      200:
 *       description: Success
 * 
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *   tags: [MainData]
 *   requestBody:
 *      required: true
 *      content:
 *         application/json:
 *            schema:
 *                type: object
 *                properties:
 *                   username:
 *                      type: string
 *                      default: myusername
 *                   password:
 *                      type: string
 *                      default: 19981998
 *   responses:
 *      200:
 *       description: Success
 * 
 */
module.exports = {router}