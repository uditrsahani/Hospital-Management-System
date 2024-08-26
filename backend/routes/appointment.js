import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Appointment API is working');
})

export default router;