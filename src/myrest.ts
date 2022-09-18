// myrest.ts
// an express middleware with routes

import express from "express";
const router = express.Router();

/**
 *  @openapi
 *  /api/myrest/greet:
 *    get:
 *      description: generate a synpatic string
 *      responses:
 *        200:
 *          description: Return a json with a msg
 */
router.get("/greet", (req, res) => {
  res.json({ msg: `Hello ${req.query.name} !` });
});

/**
 *  @openapi
 *  /api/myrest/bye:
 *    post:
 *      description: generate a surprising string
 *      responses:
 *        200:
 *          description: Return a json with a msg
 */
router.get("/bye", (req, res) => {
  res.json({ msg: `Bye ${req.query.name} !` });
});

export default router;
