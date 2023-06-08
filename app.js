require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
const product_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.use("/api/products", product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log("Sever is running");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
