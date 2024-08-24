import express from 'express';
import mongoose from 'mongoose';


const app = express();
const port = process.env.PORT || 5000;

//path
app.get('/', (req, res)=>{
  res.send({
    "name": "Udit Sahani",
    "program": "Information Technology",
    "University": "Siam University"
  });
})

app.listen(port, ()=>{
  console.log('App is running on port 5000')
})