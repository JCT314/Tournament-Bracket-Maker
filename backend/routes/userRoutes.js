const express = require('express')
const router = express.Router()
const {registerUser} = require('../controllers/userController.js')


router.post('/', registerUser)
//router.post('/login', loginUser)


module.exports = router