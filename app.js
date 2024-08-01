const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected Successfully"))
  .catch(() => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
