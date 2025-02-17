const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const blacklisttoken=require('../models/blacklistToken.model');
// Register User
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    const isUserAlreadyExist = await userModel.findOne
   
    if(isUserAlreadyExist)
    {
        res.status(400).json({message:"User already exists"});
    }


    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, lastname, email, password } = req.body;
    
    // Ensure fullname is a string, not an object
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        firstname: fullname,  // Assuming fullname is a single string
        lastname: lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
};

// Login User
module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, user });
};

module.exports.getUserProfile=async(req,res,next)=>
{
    res.status(200).json({user:req.user});
};

module.exports.logoutUser=async(req,res,next)=>
{
   res.clearCookie('token');
   const token=req.cookies.token || req.headers.authorization.split('')[1];
   await blacklisttoken.create({token});

   res.status(200).json({message:"Logged out successfully"});
};
