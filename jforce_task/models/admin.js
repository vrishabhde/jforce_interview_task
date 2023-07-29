import mongoose from "mongoose";
import { Schema } from "mongoose";

const adminuser = new Schema({
    email: String,
    password: String
});

export default mongoose.model("admin", adminuser);
