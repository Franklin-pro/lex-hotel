import jwt from "jsonwebtoken"
import errorMessage from "../itills/errorMessage"

const verifyAccess=(req,res,next)=>{
const token = req.headers["auth"]

if(!token){
    return errorMessage(res,401,`no token provided`)
}else{
    const verifyToken=jwt.verify(token,process.env.SECRET_KEY,{expiresIn:"1d"})
    if(!verifyToken){
        return errorMessage(res,401,`invalid token`)
    }else{
        if(verifyToken.role!=="admin"){
            return errorMessage(res,401,`you don't have access`)
        }else{
            return next()
        }
    }
}

}
export default verifyAccess