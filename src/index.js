import dotenv from "dotenv";

import dbConnection from "./db/index.js";
import { app } from "./app.js";

dotenv.config();


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


// as db function is async thus it return a promise
dbConnection()
.then(()=>{
    app.on("error",(error)=>{
        console.log(`Error occure while connecting`);
    })
    app.listen(process.env.PORT,()=>{
        console.log(`Server is Running on Port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
   console.log("Error while Connecting ",err);
})