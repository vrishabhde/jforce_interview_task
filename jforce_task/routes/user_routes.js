import express from "express";
import { CronJob } from "cron";
import admin from "../models/admin.js";
import { admin_home_login, admin_home_login_html, home, login, login_html, register, register_html, voting_poll } from "../controllers/user_controller.js";
import { checklogin, checkregister } from "../middlewares/auth.js";



const router = express.Router();


const system_admin = async (req,res) =>{
    try {
        const admindata =await admin.exists({email: "admin"}).exec();

        if(!admindata){
            const admin_user = new admin({
                email: "admin",
                password: "admin"
            });

            await admin_user.save();
            console.log("admin created successfully");

        }else{
            console.log("admin already exist");
        }
    } catch (error) {
        return res.send(error);
    }
}

let job = new CronJob('0 */4 * * *', async() => {
    await system_admin();

    job.stop();

})
job.start();


router.get("/home", home);
router.get("/register", register_html);
router.post("/register",checkregister, register);
router.get("/login", login_html);
router.post("/login",checklogin, login);
router.get("/admin_home_login",admin_home_login_html);
router.post("/admin_home_login", admin_home_login)
router.get("/voting_poll", voting_poll);


export default router;