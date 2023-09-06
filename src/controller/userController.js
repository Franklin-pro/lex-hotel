

import express from 'express'
import User from '../model/user'
import successMessage from '../itills/successMessage'
import errorMessage from '../itills/errorMessage'
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken'

class userController{
    static async createUser(req,res){
      const{firstName,lastName,email,password}=req.body
 try{
const hashPassword = bcrypt.hashSync(req.body.password,10)

  if(req.body.password!== req.body.confirmPassword){

    return errorMessage(res,200,'password and confirmPassword does not match')
      }

  const users = await User.create({firstName,lastName,email,password:hashPassword})

  return successMessage(res,201,'user created',users)


  }catch(error){
   
      return errorMessage(res,403,error )
   
  }

 }
 // login
 static async login(req,res){
  const{email,password}= req.body

  const user = await User.findOne({email})

  if(!user){
    return errorMessage(res,403,`user invalid email or password`)
  }else{
    const comparePassword = bcrypt.compareSync(password,user.password)
    if(!comparePassword){
      return errorMessage(res,403,`invalid password or email`)
    }else{
      const token =jwt.sign({role:user.role,firstName:user.firstName,email:user.email},process.env.SECRET_KEY,{expiresIn:"1d"}) 

      return successMessage(res,200,token,user)
    }
  }
 }
 //get all user
 static async getAllUser(req,res){
  const user = await User.find();
    if(!user || user.length==0){
return errorMessage(res,403,`user  not found `)
    }else{
      return successMessage(res,200,`${user.length} user found `,user)
    }
  
 }
//get one user
 static async getOneUser(req,res){
const id = req.params.id

  const user = await User.findById(id);
  if(!user){
   return errorMessage(res,201,`${id}user id not found`)
 
  }
  else{
    return successMessage(res,200,`user found`,user)
  }

 }
 //delete all user
static async deleteAllUsers(req,res){
  const user = await User.deleteMany();
  if(!User){
    return errorMessage(res,201,`user not found`)
  }else{
    return successMessage(res,200,`already all user deleted`)
  }
}
// delete one user

static async deleteOneUser(req,res){
  const id = req.params.id
  const user = await User.deleteOne({id})
  if(!user){
    return errorMessage(res,200,`${id}user not found`)
  }else{
    return successMessage(res,200,`user deleted`)
  }
}
 //
static async upadteUser(req,res){
  const id = req.params.id
}

}

export default userController