import express from 'express';
import mongoose from 'mongoose';
import connectToMongo from './db/db.js';
import admin from './routes/admin.js';
import appointment from './routes/appointment.js';
import doctor from './routes/doctor.js';
import patient from './routes/patient.js';

//database connection
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

//* Available Routes
app.use('api/admin', admin);
app.use('api/doctor', doctor);
app.use('api/patient', patient);
app.use('api/appointment', appointment);




app.listen(port, ()=>{
  console.log('App is running on port 5000')
})