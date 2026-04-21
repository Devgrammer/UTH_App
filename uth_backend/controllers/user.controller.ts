const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')

//Register new user
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

//Login new user
module.exports.loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const {  email, password} = req.body;

  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
    res.status(400).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password, user.password);
  if(!isMatch){
    return res.status(401).json({message:"Invalid email or password"})
  }


  delete user.password

  const token = user.generateAuthToken();
  res.status(200).json({ token,user });
};

//Get User Profile
module.exports.getUserProfile = async (req, res) => {
  res.status(200).json(req.user );
};

//Logout User
module.exports.logoutUser = async (req, res) => {
    res.clearCookie('token')
 const token = res.headers.authorization?.split(' ')?.[1]

  res.status(200).json({message:"Logged out" });
};