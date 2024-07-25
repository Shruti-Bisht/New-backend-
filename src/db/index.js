import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async()=> {
    try{
        const DBconnection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected !!! DB Host: ${DBconnection.connection.host}`)
    }catch(err){
        console.error("Error while connecting to DB ",err);
        process.exit(1);
    }
}

export default dbConnection;