import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    image: {
        type: String,
        default:""
    },
    searchHistory: {
        type: Array,
        default:[]
    }
})

export const User = mongoose.model('User',userSchema); //When you Give it User mongo will convert it to Users