import jwt from "jsonwebtoken";
import {User} from "../model/user.model.js";
import { ENV_VARS } from "../config/envVars.js";

export const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies["jwt-netflix"];
        if(!token) {
            return res.status(404).json({success:false, message:"Unauthorised - No token Provided"});
        }

        const decode = jwt.verify(token,ENV_VARS.JWT_SECRET);
        if(!decode) {
            return res.status(404).json({success:false,message:"Unauthorised -Invalid Token"});
        }

        const user = await User.findById(decode.userId).select("-password");
        if(!user) {
            return res.status(404).json({success:false,message:"User not found"});
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(500).json({success:false,message:"Internal server message"});
    }
}