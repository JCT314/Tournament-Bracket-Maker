const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler((req, res) => {
    console.log(req.body)
    const {email, username, password} = req.body

    if(!email || !username || !password){
        res.status(400)
        throw new Error('Please add all fields')
        //res.send('Not all data has been inputted')
    }
    else{
        res.status(200).json({message: 'Stored Successfully'})
    }
})

module.exports = 
{
    registerUser
}