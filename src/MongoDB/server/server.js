const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors"); // Import CORS module
const bodyParser = require("body-parser");
const port = 5000;
const Contact = require("../router/Contactroute");

app.use(cors()); // Enable CORS before defining routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a simple route for GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Mount user routes

app.use("/" ,Contact);

// Start the server

app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);
});

mongoose
  .connect("mongodb://0.0.0.0:27017", {
    dbName: "Booking",
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

