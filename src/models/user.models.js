import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    "watchHistory":[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Video",
    }],
    "username":{
        type:String, 
        required: true,
        // trim is used to automatically remove any leading and trailing whitespace from the string before saving it to database.
        trim:true,
        lowercase:true,
        //  Indexes improve the performance of read operations (queries) by allowing the database to quickly locate and retrieve the documents that match the query criteria. 
        index:true 
    },
    "email":{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    "fullName":{
        type:String,
        required: true,
        trim:true,
        index:true
    },
    "avatar":{
        type:String, // cloudinary url
        require:true,
    },
    "coverImage":{
        type:String
    },
    "password":{
        type:String,
        unique:true,
        required:[true,"Password is required"], //you can also provide a customised msg
    },
    "refreshToken":{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        return next();
    }
     this.password = bcrypt.hash(this.password , 10); 
     next();
})

userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password)
} 

userSchema.methods.generatedAccessToken = function(){
    const PAYLOAD = {
        _id: this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    }
    return jwt.sign(PAYLOAD,process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }) 
}
userSchema.methods.generatedAccessToken = function(){
    const PAYLOAD = {
        _id: this._id,
    }
    return jwt.sign(PAYLOAD,process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }) 
}

export const User = mongoose.model("User",userSchema);