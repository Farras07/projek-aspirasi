import mongoose from "mongoose"

const UsersSchema  = new mongoose.Schema({
    username :{
        type: String,
        required: true,
    },
    fullname : {
        type: String,
        required:true,
    },
    password : {
        type: String,
        required:true,
    },
    
   

})

export default mongoose.models.user || mongoose.model('user', UsersSchema)