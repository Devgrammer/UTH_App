const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')

module.exports.registerUser = async(req, res)=>{
const error = validationResult(req);
if(!error.isEmpty()){
    return res.status(400).json({error:error.array()})
}

const {fullName, email, phoneNumber, password,role}=req.body;

const isUserAlreadyExist =await userModel.findOne({email});

if(isUserAlreadyExist){
    res.status(400).json({message:"User already exist"})
}


const hashedPassword =await userModel.hashPassword(password);
const userId = await userModel.generateUniqueUserId(role);
const user=await userService.createUser({
    userId:userId,
    fullName,
    email,
    phoneNumber,
    role:role,
    password:hashedPassword
})

const token = user.generateAuthToken();
res.status(201).json({token, user})

}