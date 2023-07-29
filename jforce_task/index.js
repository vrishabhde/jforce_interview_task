import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/user_routes.js";


const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use(morgan('dev'));
app.use("/api/v1", router);

mongoose.connect("mongodb+srv://vrushabhde:vrushabhdeMDB@cluster0.41dmrwv.mongodb.net/jforce_task_DB?retryWrites=true&w=majority")
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB err=>",err))
app.listen(7006,()=>console.log("working on port 7006"))


function vote(a,b,c,d){
    
}