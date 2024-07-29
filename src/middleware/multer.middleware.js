import multer from "multer";

const storage = multer.diskStorage({
    destination:(res,file,cb)=>{
        cb(null,'../public/temp');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

export const upload = multer({
    storage,
})