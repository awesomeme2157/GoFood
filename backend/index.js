const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoDB = require("./db.js");

const userRoutes = require("./Routes/User.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// CORS configuration
app.use(cors());

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoDB.connectDB();

app.use("/api", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
