// require("dotenv").config({path:'\.env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'\.env'})

connectDB()

.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port:${process.env.PORT}`);
    })
})
.catch((error)=>{
console.log("MOngo db connection FAiled!!",error)
})





// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log("MongoDB Connected Successfully ✅");
//     }catch(error){
//         console.error("MongoDB Connection Error ❌:", error);
//         process.exit(1);
//     }
// })();