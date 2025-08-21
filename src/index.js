// require("dotenv").config({path:'\.env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'\.env'})

connectDB()






// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log("MongoDB Connected Successfully ✅");
//     }catch(error){
//         console.error("MongoDB Connection Error ❌:", error);
//         process.exit(1);
//     }
// })();