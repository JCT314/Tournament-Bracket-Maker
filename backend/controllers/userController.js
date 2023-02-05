const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const registerUser = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {email, username, password} = req.body

    if(!email || !username || !password){
        res.status(400)
        throw new Error('Please add all fields')
        //res.send('Not all data has been inputted')
    }
    
    const userExist = await User.findOne({username})

    if(userExist){
        res.status(400)
        throw new Error('User already Exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
        })
    }

    else{
        res.status(400)
        throw new Error('Invalid user Data')
    }



})

module.exports = 
{
    registerUser
}