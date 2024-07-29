import {User} from '../models/user.models.js'
import { asyncHandler } from '../utils/asyncHandler.js';

const registerUsers = asyncHandler(async(req, res)=>{
    res.status(200).json({message:"learned from chai aur code" ,success:true});
})

export {registerUsers} ;