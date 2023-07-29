import mongoose from "mongoose"; 
import { Schema } from "mongoose";

const newvoter = new Schema({
    username:String,
    email:String,
    number:Number,
    password:String,


})

export default mongoose.model("Voters", newvoter);