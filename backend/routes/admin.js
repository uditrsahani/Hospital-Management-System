import { Router } from "express";
import express from 'express';
const router = express.Router();

router.get('/admin', (req, res)=>{
  res.send({
    "message": "Admin API is working"
  })
})

export default router;