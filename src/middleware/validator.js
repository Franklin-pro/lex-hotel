import { check,validationResult } from "express-validator";
import errorMessage from "../itills/errorMessage";

class validator{
    static inputValidator(req,res,next){
        const error = validationResult(req)
        console.log(error)
        // if(!error == error.isEmpty()){
        //     error.error.map((err)=>{
        //         errorMessage(res,401,err.msg)
        //     })
        // }
        {
            return next
        }
    }
    static async userAccount(){
        return [
            check("firstName","plz fill firstName").trim().isAlpha()
        ]
    }
}
export default validator