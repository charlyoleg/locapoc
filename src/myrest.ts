// myrest.ts
// an express middleware with routes

import express from 'express';
const router = express.Router();

router.get('/greet', (req, res) => {
  res.send(`Hello ${req.query.name} !`);
});

router.get('/bye', (req, res) => {
  res.send(`Bye ${req.query.name} !`);
});

export default router;
