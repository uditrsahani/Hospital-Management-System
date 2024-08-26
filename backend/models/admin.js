import mongoose, {model} from mongoose;
const { Schema } = "mongoose";

const adminSchema = new Schema({
  name:{
    type:String,
    required: true
  },
  
  email:{
    type:String,
    required: true,
    unique: true
  },

  password:{
    type: String,
    required: true,
  },

  date:{
    type: Date,
    default: Date.now
  }
});

export default model('admin', adminSchema);