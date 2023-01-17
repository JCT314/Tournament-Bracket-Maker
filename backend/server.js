// const cors = require("cors");
// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));

const port = process.env.PORT || 5000;
const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config()
const colors = require('colors')

connectDB()

const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`))


// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//   });
//   console.log(`Server is running on port: ${port}`);
// });
