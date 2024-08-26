import mongoose, {model} from "mongoose";
const {Schema} = mongoose;

const contactSchema = new Schema({
  name:{
    type: String,
    required: true
  },

  subject:{
    type: String,
    required: true
  },

  email:{
    type: String,
    required: true
  },

  message:{
    type: String,
    required: true
  }
})

export default model('contact', contactSchema);