import dotenv from "dotenv";
import express from "express";
import dbConnection from "./db/index.js";

dotenv.config();
const app = express();


// First approch to connect to DB 
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

//         app.on("error",(err)=>{
//             console.log("Error while connecting to database ",err);
//             throw err;
//         })

//         app.listen(`${process.env.PORT}`,()=>{
//             console.log("Connected to DataBase and Server is Running on :",process.env.PORT);
//         })
//     }catch(err){
//         console.error("Error:",err);
//         throw err;
//     }
// })()

app.listen(`${process.env.PORT}`,()=>{
    console.log(`Server is Running on Port: ${process.env.PORT}`);
    dbConnection();
})