
import mongoose from 'mongoose'

const userSchemas = new mongoose.Schema({
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
confirmPassword:{
    type:String,
   
},

// role:{
//     enum:("user","admin"),
//     default:"user"
// },
// date:{
//     date:Date,
//     default:Date.now()
// }
})
const User = mongoose.model("User",userSchemas)

export default User