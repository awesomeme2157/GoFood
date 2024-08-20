const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Access the collection after the connection is open
    const db = mongoose.connection.db;
    const fetched_data = db.collection("food_data");

    // Fetch data and handle the promise
    const result = await fetched_data.find({}).toArray();
    // console.log(result);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

exports.connectDB = connectDB;
