import express from 'express'
import userController from '../controller/userController'
import dataChequer from '../middleware/dataChequer'
import validator from '../middleware/validator'
import { verify } from 'jsonwebtoken'
import verifyAccess from '../middleware/verifyAccess'

const router = express.Router()

router.post("/",verifyAccess,dataChequer.userRegisterIsEmpty,dataChequer.emailExist,validator.userAccount,validator.inputValidator,userController.createUser)
router.get("/",userController.getAllUser)
router.get("/:id",userController.getOneUser)
router.delete("/",userController.deleteAllUsers)
router.delete("/:id",userController.deleteOneUser)
router.post("/login",userController.login)

export default router
