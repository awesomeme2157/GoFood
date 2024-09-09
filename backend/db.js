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

    // Fetch data for food_data and food_categories
    const foodData = await db.collection("food_data").find({}).toArray();
    const foodCategories = await db
      .collection("food_categories")
      .find({})
      .toArray();

    // Assign data to global variables
    global.food_data = foodData;
    global.food_categories = foodCategories;

    console.log("Data fetched and global variables set.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

exports.connectDB = connectDB;
