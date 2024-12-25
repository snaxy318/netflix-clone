import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async()=> {
    try{
        const conn = await mongoose.connect(ENV_VARS.MONGO_URL);
        console.log("MongoDB connected: " + conn.connection.host);
    } catch(err) {
        console.error("Error connection to MongoDB: "+err.message);
        process.exit(1); //1 means there was error 0 means no error
    }
}