import { User } from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export async function signup(req,res) {
    try {
        const {email,password,username} = req.body;

        //checking if all the feilds are propvided
        if(!email || !password || !username) {
            return res.status(400).json({success:false,message:"All the fields are required"});
        }

        //checking if email format is correct
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailReg.test(email)) {
            return res.status(400).json({success:false,message:"Give a correct Email"});
        }

        //checking the length of password
        if(password.length<6){
            return res.status(400).json({success:false,message:"Password should contain atleast 6 characters"});
        }

        //if email address already exists
        const existingUserByEmail = await User.findOne({email:email});
        if(existingUserByEmail){
            return res.status(400).json({success:false,message:"Email already exists"});
        }

        //if username already exists
        const existingUserByUsername = await User.findOne({username:username});
        if(existingUserByUsername){
            return res.status(400).json({success:false,message:"Username already exists"});
        }

        //hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        //create new user
        const PROFILE_PICS = ["/avatar1.png","/avatar2.png","/avatar3.png"]; 
        const image = PROFILE_PICS[Math.floor(Math.random()*PROFILE_PICS.length)];

        const newUser = new User({
            email,
            password:hashedPassword,
            username,
            image,
        });

        await newUser.save();
        res.status(201).json({success:true,user:{
            ...newUser._doc,
            password:""                             //removing password
        }});
    } catch (err) {
        console.log("Error in signup controller",err.message);
        res.status(500).json({sucess:false,message:"Internal server error"});
    }
}

export async function login(req,res) {
    res.send("Login route");
}

export async function logout(req,res){
    res.send("Logout route");
}