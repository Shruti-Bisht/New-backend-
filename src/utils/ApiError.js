class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went Wrong",
        errors=[],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.success = false;

        if(stack){
            // error.stack property is a string describing the point in the code at which the error was instantiated .  
            this.stack = stack;
        }else{
            // Error.captureStackTrace(targetObject,constructorOpt) creates a .stack property on targetObject , which when accessed returns a string representing the location in the code at which Error.captureStackTrace() was called.
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export {ApiError};