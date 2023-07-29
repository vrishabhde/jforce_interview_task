import Voters from "../models/register.js";



export const checkregister = async(req,res, next) => {
    try{
        const { username, email, number, password } = req.body;
        if (!username) return res.send("username is required");
        if (!email) return res.send("email is required");
        if (!number) return res.send("number is required");
        if (!password) return res.send("password is required");

        if(password.length < 8 ) return res.send("password should be minimum of 8 digit");
      

        next();

    }catch(err){
        return res.send(err);
    }
}


export const checklogin = async(req,res,next) => {
    try{
        const { username, password } = req.body;
        if (!username) return res.send("username is required");
        if (!password) return res.send("password is required");

        const response = await Voters.find({ username }).exec();
        if (!response.length) return res.send("user not found, please registered");

        if(response[0].password != password) return res.send("credentials wrong");
        next();
       
    }catch(err){
        return res.send(err);
    }
}

