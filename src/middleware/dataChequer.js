import express from 'express'
import user from '../model/user'
import errorMessage from '../itills/errorMessage'
import User from '../model/user'

class dataChequer{
    static async userRegisterIsEmpty(req,res,next){
        const{firstName,lastName,email,password}=req.body
if(firstName==""){
    return errorMessage(res,401,`plz provide firstName`)
}
else if(lastName==""){
    return errorMessage(res,401,`plz provide lastName`)
}

else if(email==""){
    return errorMessage(res,401,`plz provide email`)
}

else if(password==""){
    return errorMessage(res,401,`plz provide password`)
}
else{
    return next()
}
    }
    static async emailExist(req,res,next){
        const email = req.body.email;
        const user =await User.findOne({email}) 
        if(user){
            return errorMessage(res,401,`user already exist`)
        }
        else {
            return next
        }
    }
}
export default dataChequer