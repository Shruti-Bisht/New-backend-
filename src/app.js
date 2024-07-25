import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

export const app = express();

const corsOptions = {
    "origin":process.env.CORS_ORIGIN || "localhost:5173" ,
    "methods": "GET,PUT,POST,DELETE",
    "credentials": true,
    "optionsSuccessStatus": 204
}

// providing the limit of any type in form of request 
app.use(express.json({limit: "16kb"}));
// url has it's own building encoder that encode special characters in browser to make that understande in server side we use express.urlencoded
app.use(express.urlencoded({extended:true , limit:"16kb"}))
// to store some static data like images etc . 
// here public is just a folder where static data is stored  
app.use(express.static("public"));
app.use(cookieParser());

app.use(cors(corsOptions));