const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./db");
const router = require("./userRoutes");

dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static(path.join(__dirname + "/client/build")));
//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname + "/client/build")));
}
console.log(__dirname + "/client/build");

app.listen(process.env.PORT, () => {
  console.log(`Backend server is running on ${process.env.PORT}`);
});
