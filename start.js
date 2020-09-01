const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connect = mongoose.connection;
connect.once("open", () =>
  console.log("MongoDB connection established successfully!")
);

connect.on("error", console.error.bind(console, "MongoDB connection error:"));

const formRoutes = require("./src/routes/form");
app.listen(port, () => console.log(`The app is running in port: ${port}`));
app.use("/contact", formRoutes);
