import mongoose, { connect, Mongoose } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect(
      "mongodb+srv://uditrsahani:Yf96XjxIscvi0nY1@hospitalmanagementclust.vvy3b.mongodb.net/?retryWrites=true&w=majority&appName=HospitalManagementCluster1"
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
    console.log('Error40001')
  }
};

export default connectToMongo;