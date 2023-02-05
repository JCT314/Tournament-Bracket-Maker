const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { find } = require('../models/userModel.js')

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

const loginUser = asyncHandler(async(req, res) => {

    const{username, password, email} = req.body

    console.log(req.body)

    const user = await User.findOne({username})

    if (!user){
        res.status(400)
        throw new Error('User does not exist')
    }

    const checkpassword = await bcrypt.compare(password, user.password)

    if(!checkpassword){
        res.status(400)
        throw new Error('Incorrect Password')
    }

    res.status(200).json({message: 'User and password is correct'})

})

module.exports = 
{
    registerUser,
    loginUser
}