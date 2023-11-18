export const errorHandler = (statusCode:any, message:any) =>{
        const error:any = new Error();
        error.message = message;
        error.statusCode = statusCode;
        return error;
    }