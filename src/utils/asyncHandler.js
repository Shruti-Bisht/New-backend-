//use promise code  
const asyncHandler = (requestHandler)=>{
    return (req, res, next) =>{
        Promise.resolve(
            requestHandler(req,res,next)
        ).catch((err)=>{
            next(err);
        })
    }
};

export {asyncHandler};


// writing same function using try catch method 

// const asyncHandler = (func) =>()=>{}  here we are passing a function inside a function which itself contain a function in nested form 

// const asyncHandler = (func) => async(req, res, next) =>{
//     try{
//         await func(req,res,next)
//     }catch(err){
//         res.status(err.code ||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }