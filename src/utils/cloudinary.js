import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from 'fs'; //fs is file system provide in nodejs present bidelfault

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath) return null ; 

        // upload the file on cloundinary
        const response = await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:"auto"
            }
        );
         // file has been uploaded successfully 
         console.log("fille is uploaded on cloudinary",response.url);
         return response;
    }catch(err){
        //remove the locally seved temporary file as the upload operation got failed 
        fs.unlinkSync(localFilePath);
        return null;
    }
} 

export {uploadOnCloudinary};