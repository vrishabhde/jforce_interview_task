import admin from "../models/admin.js";
import Voters from "../models/register.js";
import path from "path";

const __dirname = path.resolve();


export const home = async (req, res) => {
    try {
        res.sendFile(__dirname + '/public/html/home.html')

    } catch (err) {
        return res.send(err)
    }
}



export const register_html = async (req, res) => {
    try {
        res.sendFile(__dirname + '/public/html/register.html')

    } catch (err) {
        return res.send(err)
    }
}


export const register = async (req, res) => {
    try {
        const { username, email, number, password } = req.body;
        const response = await Voters.find({ username }).exec();
        if (response.length) return res.send("user already registered");

        const voter = new Voters({
            username, email, number, password
        
        })
        await voter.save();
        return res.send({ messeage: "registration success"});

    } catch (err) {
        return res.send(err);
    }
}




export const login_html = async (req, res) => {
    try {
        res.sendFile(__dirname + '/public/html/login.html')

    } catch (err) {
        return res.send(err)
    }
}



export const login = async (req, res) => {
    try {
        const {username} = req.body;
        const getvoters = await Voters.findOne({username}).exec();

       if(getvoters) return res.send("login success");
           

    } catch (err) {
        return res.send(err);
    }
}



export const admin_home_login_html = async (req, res) => {
    try {
        res.sendFile(__dirname + '/public/html/admin_home.html');

    } catch (err) {
        return res.send(err)
    }
}



export const admin_home_login = async(req,res) => {
    try {
        const{email,password} = req.body;
        if(!email) return res.send("email is require");
        if(!password) return res.send("password is require");
        const checkdata = await admin.find({email}).exec();
        if(!checkdata.length) return res.send("only admin can access this page");
        if(checkdata[0].password != password) return res.send("incorrect credentials");
        
        return res.json("login success")
        
    } catch (error) {
        return res.send(error);
    }
}


export const voting_poll = async (req, res) => {
    try {
        res.sendFile(__dirname + '/public/html/voting.html')

    } catch (err) {
        return res.send(err)
    }
}









