import mongoose, {model} from "mongoose";
const {Schema} = mongoose;

const appointmentSchema = new Schema({
  name:{
    type: String,
    required: true
  },

  email:{
    type: String,
    required: true
  },

  phoneNo:{
    type: String,
    required: true
  },

  department:{
    type: String,
    required: true
  },

  doctor:{
    type: String,
    required: true
  },

  dateAndTime:{
    type: Date,
    required: true
  }
});

export default model('appointment', appointmentSchema);