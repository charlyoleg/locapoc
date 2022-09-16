// myrest.ts
// an express middleware with routes

import express from "express";
const router = express.Router();

router.get("/greet", (req, res) => {
  res.json({ msg: `Hello ${req.query.name} !` });
});

router.get("/bye", (req, res) => {
  res.json({ msg: `Bye ${req.query.name} !` });
});

export default router;
