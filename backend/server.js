const port = process.env.PORT || 5000;
const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config()
const colors = require('colors')

connectDB()

const app = express();

app.use('/api/teams', require('./routes/teamRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))