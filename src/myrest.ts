// myrest.ts
// an express middleware with routes

import express from "express";
const router = express.Router();

/**
 *  @openapi
 *  /api/myrest/greet:
 *    get:
 *      summary: generate a synpatic string
 *      parameters:
 *        - in: quey
 *          name: name
 *          schema:
 *            type: string
 *          description: the name of the person to greet
 *      responses:
 *        '200':
 *          description: OK with a small message
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  msg:
 *                    type: string
 */
router.get("/greet", (req, res) => {
  res.json({ msg: `Hello ${req.query.name} !` });
});

/**
 *  @openapi
 *  /api/myrest/bye:
 *    get:
 *      summary: generate a surprising string
 *      parameters:
 *        - in: quey
 *          name: name
 *          schema:
 *            type: string
 *          description: the name of the person to greet
 *      responses:
 *        '200':
 *          description: OK with a small message
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  msg:
 *                    type: string
 */
router.get("/bye", (req, res) => {
  res.json({ msg: `Bye ${req.query.name} !` });
});

export default router;
