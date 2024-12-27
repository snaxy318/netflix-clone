import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars";

export const generateTokenAndSetCookies = (userId,res) => {
    const token = jwt.sign({userId},ENV_VARS.JWT_SECRET,{expiresIn:"15d"});

    res.cookie("jwt-netflix",token,{
        maxAge: 15*24*60*60*1000,   // converted 15 days to millisec
        httpOnly:true,              //prevent XSS attack cross-site scripting attacks,  makes it not be accessed by JS
        sameSite:"strict",          //CSRF attacks cross-site request forgery attacks
        secure:ENV_VARS.NODE_ENV !== "development",
    });

    return token;
}