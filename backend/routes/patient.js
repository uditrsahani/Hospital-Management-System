import express from 'express'
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Patient API is working');
})

export default router;