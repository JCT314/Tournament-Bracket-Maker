const port = process.env.PORT || 5000;
const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config()
const colors = require('colors')
const errorHandler = require('./middleware/errorMiddleware.js')

connectDB()

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/teams', require('./routes/teamRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))